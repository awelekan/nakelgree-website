import { stats } from '@/lib/data'
import { RevealStagger, RevealItem } from '@/components/reveal'

export function StatsSection() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <RevealStagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
