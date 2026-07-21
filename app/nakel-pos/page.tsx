import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, BookOpen, Zap, Users, BarChart3, Shield } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CTASection } from '@/components/cta-section'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Nakel POS - Business Management Software',
  description:
    'Nakel POS is a comprehensive business management platform for quotes, invoices, bookings, payments, and financial reporting. Streamline your operations from proposal to payment.',
}

const features = [
  {
    icon: Zap,
    title: 'Quote to Payment',
    description:
      'Complete workflow from client quote through booking confirmation, invoice generation, and payment tracking — all in one app.',
  },
  {
    icon: BarChart3,
    title: 'Financial Dashboard',
    description:
      'Real-time business insights: revenue, cash flow, profitability, and payment analysis. Make data-driven decisions.',
  },
  {
    icon: Users,
    title: 'Client Management',
    description:
      'Organize customer records, track communication history, and manage contact details. Never lose track of a client.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Your business data is encrypted, backed up daily, and protected. Enterprise-grade security for peace of mind.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Accounting',
    description:
      'General ledger, accounts, journals, debtors, creditors, and multi-step financial reporting for accurate bookkeeping.',
  },
  {
    icon: ArrowRight,
    title: 'Easy Integration',
    description:
      'Export data to CSV, PDF, and spreadsheets. Use the API for custom workflows and third-party integrations.',
  },
]

const getStartedSteps = [
  {
    number: '01',
    title: 'Sign In',
    description: 'Access your Nakel POS account and explore the dashboard.',
  },
  {
    number: '02',
    title: 'Add Clients & Services',
    description: 'Create your first clients and define your service offerings with pricing.',
  },
  {
    number: '03',
    title: 'Create Your First Quote',
    description: 'Build a professional quote and send it to your client for approval.',
  },
  {
    number: '04',
    title: 'Convert to Booking',
    description: 'Once accepted, convert the quote into a booking and generate the invoice automatically.',
  },
  {
    number: '05',
    title: 'Record Payment',
    description: 'Track payments and confirm invoice status with just a few clicks.',
  },
]

const docSections = [
  {
    icon: Zap,
    title: 'Quick Start Guide',
    description: 'Get up and running in 30 minutes. Perfect for new users who want the fastest path to their first quote.',
    href: '/nakel-pos/quick-start',
    label: 'View Quick Start',
  },
  {
    icon: BookOpen,
    title: 'Complete User Guide',
    description:
      'Comprehensive reference covering all features, modules, workflows, and best practices. Perfect for learning at your own pace.',
    href: '/nakel-pos/user-guide',
    label: 'Read Full Guide',
  },
  {
    icon: Users,
    title: 'Training Program',
    description:
      'Structured learning path with video outlines, hands-on exercises, quizzes, and certification. Become a Nakel POS expert.',
    href: '/nakel-pos/training',
    label: 'Start Training',
  },
]

export default function NakelPOSPage() {
  return (
    <>
      <PageHero
        eyebrow="Nakel POS"
        title="Business Management Made Simple"
        description="Quote to payment. Clients to invoices. Financial insights to decisions. Nakel POS streamlines your entire business workflow in one intuitive platform."
      />

      {/* Key Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="What You Can Do"
          title="Everything you need to run your business"
          description="From managing clients and creating quotes to tracking payments and analyzing financials."
        />
        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <RevealItem
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </section>

      {/* How It Works */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Simple Workflow"
            title="From idea to payment in 5 steps"
            description="The Nakel POS workflow is designed to be fast, intuitive, and complete."
          />
          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {getStartedSteps.map((step) => (
              <RevealItem key={step.number} className="relative">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {/* Connector line */}
                <div className="absolute right-0 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-primary to-transparent lg:block" />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Documentation Links */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Learning Paths"
          title="Choose how you want to learn"
          description="Whether you prefer fast setup, comprehensive reference, or structured training — we have a path for you."
        />
        <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {docSections.map((section) => {
            const Icon = section.icon
            return (
              <Link key={section.href} href={section.href} className="group">
                <RevealItem className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{section.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                    <span>{section.label}</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </RevealItem>
              </Link>
            )
          })}
        </RevealStagger>
      </section>

      {/* Key Benefits */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Why businesses choose Nakel POS
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Built for African businesses who want simplicity, reliability, and control over their operations.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Intuitive interface — no training required',
                    'Complete financial tracking and reporting',
                    'Automatic invoice and payment management',
                    'Real-time business insights and dashboards',
                    'Secure, encrypted data with daily backups',
                    'Affordable and scalable for any business size',
                  ].map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      For Entrepreneurs
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Manage clients, quotes, and payments without hiring an accountant.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      For Small Teams
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Collaborate, track progress, and share financial insights across your team.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      For Organizations
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Multi-user access, role-based permissions, and complete audit trails.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked"
          title="Common questions about Nakel POS"
        />
        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              q: 'Is my data secure?',
              a: 'Yes. All data is encrypted at rest and in transit. Daily automated backups ensure you never lose important information.',
            },
            {
              q: 'Can I export my data?',
              a: 'Yes. Export quotes, invoices, payments, and reports as CSV, PDF, or integrate via our REST API.',
            },
            {
              q: 'How do I get started?',
              a: 'Read the Quick Start Guide for a 30-minute setup, or jump into the Complete User Guide for comprehensive learning.',
            },
            {
              q: 'What if I need help?',
              a: 'Access in-app help, documentation, training videos, and contact support. Your organization admin can also provide guidance.',
            },
          ].map((item) => (
            <RevealItem
              key={item.q}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-semibold text-foreground">{item.q}</p>
              <p className="mt-3 text-muted-foreground">{item.a}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <CTASection
        title="Ready to transform your business?"
        description="Start with the Quick Start Guide and be up and running in 30 minutes."
        primary={{ label: 'Get Started Now', href: '/nakel-pos/quick-start' }}
        secondary={{ label: 'Read Full Guide', href: '/nakel-pos/user-guide' }}
      />
    </>
  )
}
