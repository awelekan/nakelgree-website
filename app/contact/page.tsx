import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ActivityForms } from '@/components/activity-forms'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with NakelGreen. Reach us by email or phone, or visit our innovation hub in Lagos, Nigeria.',
}

const details = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: siteConfig.location },
  { icon: Clock, label: 'Hours', value: 'Mon – Fri, 9am – 6pm' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a question about our programs, want to hire talent, or interested in partnering? We'd love to hear from you."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">
                Get in touch
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Reach out through any of the channels below and our team will
                respond as soon as possible.
              </p>
              <ul className="mt-8 space-y-4">
                {details.map((d) => (
                  <li
                    key={d.label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <d.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {d.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="NakelGreen location map"
                  src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
                  width="100%"
                  height="240"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full grayscale-[0.2]"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ActivityForms formType="general" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
