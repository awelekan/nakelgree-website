import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
