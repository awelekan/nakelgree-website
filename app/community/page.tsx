import type { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, MapPin, Code2, Users, Presentation, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CTASection } from '@/components/cta-section'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Community & Events',
  description:
    'Join the NakelGreen community — hackathons, meetups, training sessions, and events that connect and grow African tech talent.',
}

const eventTypes = [
  {
    icon: Code2,
    title: 'Hackathons',
    description:
      'Time-boxed build sprints where teams solve real problems and turn ideas into working prototypes.',
  },
  {
    icon: Users,
    title: 'Meetups',
    description:
      'Casual gatherings to connect, share knowledge, and grow your network within the tech community.',
  },
  {
    icon: Presentation,
    title: 'Training sessions',
    description:
      'Workshops and masterclasses on the latest tools, skills, and industry trends — open to all levels.',
  },
]

const upcoming = [
  {
    title: 'NakelGreen Build Weekend',
    type: 'Hackathon',
    date: 'Recurring quarterly',
    location: 'Lagos, Nigeria',
  },
  {
    title: 'Frontend Fundamentals Workshop',
    type: 'Training',
    date: 'Monthly',
    location: 'Hybrid',
  },
  {
    title: 'Founders & Builders Meetup',
    type: 'Meetup',
    date: 'Monthly',
    location: 'NakelGreen Hub',
  },
  {
    title: 'Design in Tech Masterclass',
    type: 'Training',
    date: 'Monthly',
    location: 'Online',
  },
]

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community & Events"
        title="Learning is better together"
        description="The NakelGreen community is where connections spark, ideas grow, and skills sharpen. Join our hackathons, meetups, and training sessions."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="What we host"
          title="Events that bring the ecosystem together"
        />
        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {eventTypes.map((e) => (
            <RevealItem
              key={e.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <e.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {e.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
                <Image
                  src="/images/community.png"
                  alt="A NakelGreen community hackathon event in progress"
                  width={640}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Community engagement
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                More than events — a movement
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our community keeps you engaged long after class ends. Through
                ongoing events and shared spaces, members stay connected,
                collaborate on projects, and lift each other up.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: '50+', label: 'Events hosted' },
                  { value: '1k+', label: 'Community members' },
                  { value: '20+', label: 'Partner orgs' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <p className="text-2xl font-bold text-primary">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="On the calendar"
          title="Upcoming and recurring events"
          description="Save your spot and come build, learn, and connect with the community."
        />
        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {upcoming.map((event) => (
            <RevealItem key={event.title}>
              <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {event.type}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-4" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Register
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <CTASection
        title="Never miss what's next"
        description="Join the community to get updates on upcoming hackathons, meetups, and training sessions."
        primary={{ label: 'Join Community', href: '/contact' }}
        secondary={{ label: 'Explore Programs', href: '/programs' }}
      />
    </>
  )
}
