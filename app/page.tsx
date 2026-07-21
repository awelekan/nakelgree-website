import Link from 'next/link'
import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { VerticalsSection } from '@/components/home/verticals-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <VerticalsSection />
      <WhyChooseSection />
      <TestimonialsSection />

      {/* Nakel POS Promotional Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 px-6 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Business Management
              </div>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Streamline Your Business with Nakel POS
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From quote to payment in one unified platform. Manage clients, create proposals, track work, and analyze finances—all in one place.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">
                    ✓
                  </span>
                  Quote to payment workflow
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">
                    ✓
                  </span>
                  Professional invoicing
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">
                    ✓
                  </span>
                  Financial dashboards
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">
                    ✓
                  </span>
                  Real-time analytics
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/nakel-pos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Explore Nakel POS
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/nakel-pos/quick-start"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                >
                  Quick Start Guide (30 min)
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase text-primary">Complete Workflow</p>
                  <p className="mt-2 text-foreground font-semibold">Quote → Booking → Invoice → Payment</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase text-primary">Key Features</p>
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-muted-foreground">💼 Client Management</p>
                    <p className="text-sm text-muted-foreground">📊 Financial Reporting</p>
                    <p className="text-sm text-muted-foreground">🔒 Secure & Reliable</p>
                    <p className="text-sm text-muted-foreground">⚡ Easy Integration</p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase text-primary">Learn Nakel POS</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Choose your learning path: Quick Start, Full User Guide, or Structured Training Program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
