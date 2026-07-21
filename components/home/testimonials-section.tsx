import Image from 'next/image'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { RevealStagger, RevealItem } from '@/components/reveal'

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        eyebrow="Stories from our community"
        title="Hear from NakelGreen graduates"
        description="Real people, real outcomes. Our alumni are building products and careers across the tech ecosystem."
      />

      <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem key={t.name}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Quote className="size-8 text-primary/30" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  )
}
