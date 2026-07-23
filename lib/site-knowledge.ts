import { communityEvents, innovationEvents, programs, type Program } from '@/lib/data'
import { siteConfig } from '@/lib/site'

export type KnowledgeEntry = {
  title: string
  summary: string
  content: string
  category: string
  tags: string[]
}

const synonymMap: Record<string, string[]> = {
  learn: ['program', 'training', 'academy'],
  training: ['program', 'academy', 'course'],
  academy: ['program', 'training'],
  startup: ['innovation', 'accelerator', 'founder'],
  cowork: ['workspace', 'innovation', 'hub'],
  talent: ['career', 'jobs', 'placement', 'internship'],
  internship: ['talent', 'career', 'placement'],
  placement: ['talent', 'career', 'jobs'],
  contact: ['email', 'reach', 'message'],
  email: ['contact', 'reach'],
  price: ['cost', 'fee', 'investment', 'scholarship'],
  fee: ['price', 'cost', 'investment'],
}

function makeProgramEntry(program: Program): KnowledgeEntry {
  return {
    title: program.title,
    summary: program.description,
    content: `${program.fullDescription} Skills: ${program.skills.join(', ')}. Format: ${program.format.join(', ')}. Outcomes: ${program.outcomes?.join(', ') || 'Not listed.'}`,
    category: 'programs',
    tags: [program.title, ...program.skills, ...program.format, ...(program.outcomes || [])],
  }
}

function makeEventEntry(title: string, description: string, fullDescription: string, category: string, tags: string[]) {
  return {
    title,
    summary: description,
    content: fullDescription,
    category,
    tags,
  }
}

export const siteKnowledgeBase: KnowledgeEntry[] = [
  {
    title: 'About NakelGreen',
    summary: siteConfig.tagline,
    content: `${siteConfig.description} NakelGreen is an African EdTech and innovation hub helping people learn digital skills, work effectively, and innovate with confidence.`,
    category: 'about',
    tags: ['NakelGreen', 'about', 'learn', 'work', 'innovate', 'edtech', 'innovation hub'],
  },
  ...programs.map(makeProgramEntry),
  ...innovationEvents.map((event) =>
    makeEventEntry(event.title, event.description, event.fullDescription, 'innovation', [
      event.title,
      ...event.format,
      ...(event.benefits || []),
      ...(event.whoShouldAttend ? [event.whoShouldAttend] : []),
    ]),
  ),
  ...communityEvents.map((event) =>
    makeEventEntry(event.title, event.description, event.fullDescription, 'community', [
      event.title,
      ...event.format,
      ...(event.benefits || []),
      ...(event.whoShouldAttend ? [event.whoShouldAttend] : []),
    ]),
  ),
]

function normalizeText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

function expandTokens(tokens: string[]) {
  const expanded = new Set<string>()

  for (const token of tokens) {
    if (!token) continue
    expanded.add(token)

    const matches = synonymMap[token]
    if (matches) {
      matches.forEach((match) => expanded.add(match))
    }
  }

  return Array.from(expanded)
}

function countTokenMatches(text: string, tokens: string[]) {
  let count = 0
  for (const token of tokens) {
    if (!token) continue
    if (text.includes(token)) count += 1
  }
  return count
}

export function retrieveKnowledgeEntries(query: string, limit = 3) {
  const normalizedQuery = normalizeText(query)
  if (!normalizedQuery) return []

  const queryTokens = expandTokens(normalizedQuery.split(' '))
  const phraseTarget = normalizedQuery

  return siteKnowledgeBase
    .map((entry) => {
      const haystack = normalizeText(`${entry.title} ${entry.summary} ${entry.content} ${entry.tags.join(' ')}`)
      const titleText = normalizeText(entry.title)
      const summaryText = normalizeText(entry.summary)
      const tagText = normalizeText(entry.tags.join(' '))

      let score = 0

      if (titleText.includes(phraseTarget)) score += 15
      if (summaryText.includes(phraseTarget)) score += 10
      if (haystack.includes(phraseTarget)) score += 6

      const titleMatchCount = countTokenMatches(titleText, queryTokens)
      const summaryMatchCount = countTokenMatches(summaryText, queryTokens)
      const tagMatchCount = countTokenMatches(tagText, queryTokens)
      const bodyMatchCount = countTokenMatches(haystack, queryTokens)

      score += titleMatchCount * 4
      score += summaryMatchCount * 3
      score += tagMatchCount * 2
      score += bodyMatchCount * 1

      if (entry.category === 'programs' && queryTokens.some((token) => ['program', 'course', 'training', 'academy', 'learn'].includes(token))) {
        score += 4
      }

      if (entry.category === 'innovation' && queryTokens.some((token) => ['innovation', 'startup', 'hackathon', 'cowork', 'workspace', 'hub'].includes(token))) {
        score += 4
      }

      if (entry.category === 'community' && queryTokens.some((token) => ['community', 'network', 'event', 'talk', 'workshop'].includes(token))) {
        score += 4
      }

      return { ...entry, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}
