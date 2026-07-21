import Image from 'next/image'
import { Wrench, Rocket, Target, Users } from 'lucide-react'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

const reasons = [
  {
    icon: Wrench,
    title: 'Hands-on training',
    description:
      'Learn by doing. Every track is built around practical, real-world exercises — not just theory.',
  },
  {
    icon: Rocket,
    title: 'Real-world projects',
    description:
      'Graduate with a portfolio of projects that demonstrate your skills to employers and clients.',
  },
  {
    icon: Target,
    title: 'Career-focused learning',
    description:
      'From day one, our curriculum is aligned with the roles and skills the industry is hiring for.',
  },
  {
    icon: Users,
    title: 'Strong community',
    description:
      'Join a supportive network of peers, mentors, and alumni who grow and build together.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <Image
              src="/images/about.png"
              alt="Mentors and a student reviewing code together"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Why NakelGreen
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built to help you go from learning to earning
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We combine practitioner-led teaching, a builder&apos;s environment,
            and a career-first mindset so you leave ready for the real world.
          </p>

          <RevealStagger className="mt-8 grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <RevealItem key={r.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {r.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
