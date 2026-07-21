import type { Metadata } from 'next'
import Image from 'next/image'
import { Compass, Rocket, Heart, Globe2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CTASection } from '@/components/cta-section'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'
import { stats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about NakelGreen — our story, vision, mission, and the impact we are making across the African tech ecosystem.',
}

const values = [
  {
    icon: Heart,
    title: 'People first',
    description:
      'We invest in potential. Every learner is supported to grow far beyond a single course.',
  },
  {
    icon: Rocket,
    title: 'Bias for building',
    description:
      'We believe skills are proven by what you make. Doing comes before memorizing.',
  },
  {
    icon: Globe2,
    title: 'African-forward',
    description:
      'We build local capacity that competes globally, showcasing the best of African talent.',
  },
  {
    icon: Compass,
    title: 'Community-driven',
    description:
      'We grow together. Mentors, alumni, and partners make the ecosystem stronger for everyone.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NakelGreen"
        title="Empowering Africa to learn, work, and innovate"
        description="NakelGreen is an EdTech and innovation company on a mission to equip people with the digital skills and ecosystem they need to thrive in a fast-changing world."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Our story
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Born from a simple belief in talent
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                NakelGreen started with a clear observation: across Africa there
                is an abundance of ambition and raw talent, but too few pathways
                to turn that potential into globally competitive careers.
              </p>
              <p>
                So we built a single ecosystem that brings together everything a
                person needs to succeed in tech — world-class training, a space
                to build, mentorship to innovate, and support to find work.
              </p>
              <p>
                Today, NakelGreen is a growing community of learners, builders,
                mentors, and partners united by three words: learn, work,
                innovate.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/coworking.png"
                alt="Modern NakelGreen co-working space"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="rounded-2xl border border-border bg-card p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Compass className="size-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To be Africa&apos;s leading innovation hub — a place where digital
              talent is nurtured, ideas become products, and careers are
              launched.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Rocket className="size-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To empower individuals with in-demand digital skills and provide
              an ecosystem where they can learn, work, and innovate together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Our impact"
          title="Growth you can measure"
          description="We are proud of a community that keeps growing — in skills, in numbers, and in opportunity."
        />
        <RevealStagger className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <p className="text-4xl font-bold tracking-tight text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="What makes us unique"
            title="The values that guide everything we do"
          />
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CTASection
        title="Become part of the NakelGreen story"
        description="Whether you want to learn, build, or hire, there is a place for you in our ecosystem."
      />
    </>
  )
}
