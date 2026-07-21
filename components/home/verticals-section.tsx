import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { verticals } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { RevealStagger, RevealItem } from '@/components/reveal'

export function VerticalsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        eyebrow="One connected ecosystem"
        title="Four ways NakelGreen empowers you"
        description="Learn the skills, find the space to build, get the support to innovate, and connect to real opportunities — all in one place."
      />

      <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {verticals.map((v) => (
          <RevealItem key={v.title}>
            <Link
              href={v.href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <v.icon className="size-6" />
              </div>
              <h3 className="mt-5 flex items-center gap-1 text-lg font-semibold text-foreground">
                {v.title}
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </Link>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  )
}
