import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTASection({
  title = 'Ready to start your journey?',
  description = 'Join a community of learners, builders, and innovators shaping the future of African tech.',
  primary = { label: 'Start Learning', href: '/programs' },
  secondary = { label: 'Contact Us', href: '/contact' },
}: {
  title?: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-primary-foreground/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
            >
              {primary.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
