import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Nakel POS - Training Program',
  description: 'Structured learning path with videos, exercises, quizzes, and certification. Become a Nakel POS expert.',
}

const levels = [
  {
    number: 1,
    title: 'Basics (Level 1)',
    time: '25-30 min',
    description: 'See the app, add core records, and create your first quote.',
    topics: [
      'Login and app navigation',
      'Explore the dashboard',
      'Create clients',
      'Add services with pricing',
      'Build your first quote',
    ],
  },
  {
    number: 2,
    title: 'Core Workflow (Level 2)',
    time: '45-60 min',
    description: 'Complete the full quote → booking → invoice → payment process.',
    topics: [
      'Send and accept quotes',
      'Convert quote to booking',
      'Review auto-created invoices',
      'Post invoice to general ledger',
      'Record payments',
      'Monitor dashboard updates',
    ],
  },
  {
    number: 3,
    title: 'Advanced Features (Level 3)',
    time: '60-90 min',
    description: 'Learn advanced features and manage complex workflows.',
    topics: [
      'Projects and long-term work',
      'Finance deep dive (debtors, creditors, cash flow)',
      'Document management',
      'Multi-user setup and roles',
      'Advanced reporting',
    ],
  },
]

const exercises = [
  {
    title: 'Exercise 1: Your First Transaction',
    time: '15 min',
    description: 'Complete one full cycle from quote to payment.',
    steps: [
      'Create a practice client',
      'Add 2 practice services',
      'Create a quote',
      'Accept the quote',
      'Convert to booking',
      'View auto-created invoice',
      'Record payment',
      'Verify invoice marked as Paid',
    ],
  },
  {
    title: 'Exercise 2: Multi-Service Project',
    time: '20 min',
    description: 'Build a complex project with multiple services.',
    steps: [
      'Create 5 services with different prices',
      'Create a new client',
      'Build a quote with all services',
      'Accept and convert to booking',
      'Record partial and remaining payments',
      'Verify full payment recorded',
    ],
  },
  {
    title: 'Exercise 3: Finance Review',
    time: '15 min',
    description: 'Use finance pages to verify business health.',
    steps: [
      'Open Finance → Overview',
      'Review revenue and invoices',
      'Check Debtors and Creditors',
      'Review Cash Flow',
      'Export a sample report',
    ],
  },
  {
    title: 'Exercise 4: Document Workflow',
    time: '10 min',
    description: 'Capture and organize supporting documents.',
    steps: [
      'Go to Documents section',
      'Upload a sample file',
      'Add title, type, and tags',
      'Search for the document',
      'Link to a booking',
    ],
  },
]

const dailySchedule = [
  {
    day: 'Day 1: Getting Started',
    activities: [
      '📺 Watch welcome video (3 min)',
      '📺 Watch login & dashboard video (4 min)',
      '✍️ Exercise: Create first client (5 min)',
      '✍️ Exercise: Add 3 services (5 min)',
      '✍️ Exercise: Create first quote (5 min)',
      '📊 Review Finance Overview (3 min)',
      '⏱️ Total: 25 minutes',
    ],
  },
  {
    day: 'Day 2: Core Workflow',
    activities: [
      '📺 Watch quote workflow video (4 min)',
      '📺 Watch invoice management video (3 min)',
      '✍️ Complete Exercise 1: Full transaction (15 min)',
      '📋 Take Quiz 1: Basics (5 min)',
      '⏱️ Total: 27 minutes',
    ],
  },
  {
    day: 'Day 3: Advanced Topics',
    activities: [
      '📺 Watch advanced features video (5 min)',
      '📺 Watch finance deep dive video (6 min)',
      '✍️ Complete Exercise 2: Multi-service project (20 min)',
      '📋 Take Quiz 2: Workflow (5 min)',
      '⏱️ Total: 36 minutes',
    ],
  },
  {
    day: 'Day 4: Reporting & Analysis',
    activities: [
      '📺 Watch reporting video (5 min)',
      '📺 Watch financial dashboard video (3 min)',
      '✍️ Complete Exercise 3 & 4 (25 min)',
      '📋 Take Quiz 3: Advanced (5 min)',
      '⏱️ Total: 38 minutes',
    ],
  },
]

const quizzes = [
  {
    number: 1,
    title: 'Knowledge Check: Basics',
    questions: 5,
    passing: '80%',
    topics: ['Quote vs Invoice', 'Quote statuses', 'Auto-created items', 'Organization settings', 'Dashboard location'],
  },
  {
    number: 2,
    title: 'Knowledge Check: Workflow',
    questions: 5,
    passing: '80%',
    topics: ['Quote sequence', 'GL entries', 'Partial payments', 'Quote changes', 'Overdue invoices'],
  },
  {
    number: 3,
    title: 'Knowledge Check: Advanced',
    questions: 5,
    passing: '80%',
    topics: ['Resource assignment', 'Manual invoices', 'Archive vs delete', 'Vendor linking', 'Bulk export'],
  },
]

export default function TrainingPage() {
  return (
    <>
      <div className="border-b border-border bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/nakel-pos"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to Nakel POS
          </Link>
        </div>
      </div>

      <PageHero
        eyebrow="Training Program"
        title="Become a Nakel POS expert"
        description="Structured learning path with videos, exercises, quizzes, and certification. Learn at your own pace and become confident using every feature."
      />

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Learning Levels */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Three Learning Levels"
            title="Progressive learning path"
            description="Start with basics, move through core workflows, and master advanced features."
          />

          <RevealStagger className="mt-12 space-y-6">
            {levels.map((level) => (
              <RevealItem
                key={level.number}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      Level {level.number}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-foreground">{level.title}</h3>
                    <p className="mt-2 text-muted-foreground">{level.description}</p>
                    <ul className="mt-4 space-y-2">
                      {level.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex shrink-0 flex-col items-end">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{level.time}</p>
                      <p className="text-xs text-muted-foreground">Time to complete</p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
            <p className="text-sm font-semibold text-primary">
              📈 Total time to proficiency: 4-5 hours | Time to expert level: 10+ hours
            </p>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground">Recommended 4-Day Schedule</h2>
          <p className="mt-3 text-muted-foreground">
            Complete this schedule to become proficient in all Nakel POS features.
          </p>

          <RevealStagger className="mt-8 space-y-4">
            {dailySchedule.map((day) => (
              <RevealItem
                key={day.day}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="font-semibold text-foreground">{day.day}</p>
                <ul className="mt-4 space-y-2">
                  {day.activities.map((activity) => (
                    <li key={activity} className="text-sm text-muted-foreground">
                      {activity}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>

        {/* Exercises */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Hands-On Practice"
            title="Learn by doing"
            description="Complete exercises to reinforce what you've learned."
          />

          <RevealStagger className="mt-12 space-y-6">
            {exercises.map((exercise) => (
              <RevealItem
                key={exercise.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{exercise.title}</h3>
                    <p className="mt-2 text-muted-foreground">{exercise.description}</p>
                    <ul className="mt-4 space-y-1">
                      {exercise.steps.map((step) => (
                        <li key={step} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                            ✓
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-semibold text-primary">{exercise.time}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>

        {/* Quizzes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground">Knowledge Checks</h2>
          <p className="mt-3 text-muted-foreground">
            Test your understanding with quizzes after each level. Passing score: 80%.
          </p>

          <RevealStagger className="mt-8 grid gap-6 md:grid-cols-3">
            {quizzes.map((quiz) => (
              <RevealItem
                key={quiz.number}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary font-bold">
                  {quiz.number}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{quiz.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {quiz.questions} questions • {quiz.passing} to pass
                </p>
                <div className="mt-4 space-y-1">
                  {quiz.topics.map((topic) => (
                    <p key={topic} className="text-xs text-muted-foreground">
                      • {topic}
                    </p>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>

        {/* Certification */}
        <section className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h2 className="text-2xl font-bold text-foreground">🎓 Nakel POS Certification</h2>
          <p className="mt-3 text-muted-foreground">
            Complete all levels, pass all quizzes, and finish all exercises to earn your certification.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-foreground">Requirements:</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>✓ Watch all training videos</li>
                <li>✓ Complete all 4 exercises</li>
                <li>✓ Pass all 3 knowledge checks (80%+)</li>
                <li>✓ No tutorials skipped</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">Benefits:</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>✓ Print certificate</li>
                <li>✓ "Certified Nakel POS User" badge in profile</li>
                <li>✓ Share on LinkedIn</li>
                <li>✓ Professional recognition</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-center font-semibold text-primary">
            Estimated time: 5-6 hours total
          </p>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground">Learning Tips</h2>

          <RevealStagger className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                icon: '📺',
                title: 'Watch videos in order',
                desc: 'Each video builds on the previous one. Do not skip around.',
              },
              {
                icon: '✍️',
                title: 'Do exercises immediately',
                desc: 'Hands-on practice right after watching reinforces learning.',
              },
              {
                icon: '📋',
                title: 'Take quizzes seriously',
                desc: 'Quizzes validate your understanding before moving to the next level.',
              },
              {
                icon: '💼',
                title: 'Practice with real data',
                desc: 'After completing exercises, use Nakel POS with your actual clients and work.',
              },
              {
                icon: '❓',
                title: 'Ask questions',
                desc: 'No question is too basic. Use the in-app help or contact support.',
              },
              {
                icon: '👥',
                title: 'Help others learn',
                desc: "Teaching what you've learned reinforces your own knowledge.",
              },
            ].map((tip) => (
              <RevealItem key={tip.title} className="rounded-xl border border-border bg-card p-4">
                <p className="text-2xl">{tip.icon}</p>
                <p className="mt-2 font-semibold text-foreground">{tip.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{tip.desc}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>

        {/* Support */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl font-bold text-foreground">Need Help?</h2>
          <p className="mt-3 text-muted-foreground">
            Support is available through multiple channels.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-foreground">In-App Help</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Click the help icon (?) in the app for instant guidance.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Documentation</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Read the Complete User Guide and Quick Start Guide on this site.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Contact Support</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Email support@nakelpos.com for technical issues or personalized help.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-foreground">Ready to start?</h3>
          <p className="mt-2 text-muted-foreground">
            Complete this training program to become a Nakel POS expert in just a few hours.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/nakel-pos/quick-start"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Quick Start (30 min)
            </Link>
            <Link
              href="/nakel-pos/user-guide"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Full User Guide
            </Link>
            <Link
              href="/nakel-pos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              Back to Nakel POS
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
