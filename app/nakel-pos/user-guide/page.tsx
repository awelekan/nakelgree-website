import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Service Based Management System App - Complete User Guide',
  description: 'Comprehensive reference guide for the Service Based Management System App. Learn all features, modules, workflows, best practices, and troubleshooting.',
}

const modules = [
  {
    title: 'Dashboard',
    description: 'Your business overview at a glance. See revenue, bookings, invoices, and key metrics.',
    features: ['Revenue summary', 'Quote to booking conversion', 'Invoice and payment status', 'Cash flow snapshot'],
  },
  {
    title: 'Clients',
    description: 'Manage customer records, contact details, and communication history.',
    features: ['Create and edit clients', 'Track client details', 'View client history', 'Archive inactive clients'],
  },
  {
    title: 'Services',
    description: 'Define your offerings and pricing. Reuse services across multiple quotes.',
    features: ['Create services with pricing', 'Manage descriptions', 'Update prices', 'Archive unused services'],
  },
  {
    title: 'Quotes',
    description: 'Build professional quotes and send them to clients for approval.',
    features: ['Create quotes with services', 'Track quote status', 'Set expiration dates', 'Convert to bookings'],
  },
  {
    title: 'Bookings',
    description: 'Confirmed work orders for a single client. Track progress, schedules, and linked invoices.',
    features: ['Create and manage bookings', 'Track progress status', 'Assign resources', 'Link documents'],
  },
  {
    title: 'Projects',
    description: 'Multi-client work packages. Link two or more clients to a single quote and manage collective delivery, billing, and invoices.',
    features: ['Create multi-client projects', 'Attach multiple clients to one quote', 'Track shared scope and milestones', 'Generate consolidated invoices'],
  },
  {
    title: 'Invoices',
    description: 'Auto-generated from bookings, projects, or created manually. Track payment status and send to clients.',
    features: ['Auto-created from bookings', 'Post to General Ledger', 'Send to clients', 'Track payment status'],
  },
  {
    title: 'Payments',
    description: 'Record incoming and outgoing payments. Link to invoices and track reconciliation.',
    features: ['Record payments received', 'Link to invoices', 'Track payment methods', 'Monitor outstanding balances'],
  },
  {
    title: 'Finance Overview',
    description: 'Deep financial insights. Revenue, profitability, cash flow, and comprehensive reporting.',
    features: ['Revenue trends', 'Profitability analysis', 'Cash flow monitoring', 'General ledger access', 'Export reports'],
  },
]

const bestPractices = [
  {
    title: '✅ Do',
    items: [
      'Use consistent naming for clients and services',
      'Set quote expiration dates',
      'Save work before leaving a page',
      'Review totals before sending quotes',
      'Attach supporting documents',
      'Reconcile payments regularly',
      'Archive old records instead of deleting',
    ],
  },
  {
    title: '❌ Avoid',
    items: [
      'Creating duplicate client records',
      'Leaving drafts unsaved',
      'Mixing currencies in one workflow',
      'Deleting history (use archive)',
      'Recording payments without invoice links',
      'Ignoring overdue invoices',
      'Skipping GL posting if required for accounting',
    ],
  },
]

export default function UserGuidePage() {
  return (
    <>
      <div className="border-b border-border bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/nakel-pos"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to SBMS
          </Link>
        </div>
      </div>

      <PageHero
        eyebrow="Complete User Guide"
        title="Full reference for all SBMS features"
      />

      {/* Navigation */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-semibold text-foreground">Quick Navigation:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Overview', 'Modules', 'Workflows', 'Best Practices', 'FAQ', 'Troubleshooting'].map((item) => (
              <button
                key={item}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/20"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground">Overview</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The Service Based Management System App is a business management platform designed to streamline your operations from quote to payment. 
            Whether you're managing clients, creating proposals, tracking work across bookings and projects, or analyzing finances — the SBMS App keeps 
            everything organized in one intuitive platform. Access the app at https://sbms.nakelgreen.com.ng.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-semibold text-foreground">Who uses SBMS?</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Entrepreneurs and solopreneurs</li>
                <li>• Consultants and freelancers</li>
                <li>• Small to medium businesses</li>
                <li>• Service-based organizations</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-semibold text-foreground">Core workflow</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Client → Quote → Booking → Invoice → Payment → Financial Reporting
              </p>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="All Modules"
            title="Understanding SBMS modules"
            description="Each module handles a specific part of your business workflow."
          />

          <RevealStagger className="mt-8 grid gap-6">
            {modules.map((module) => (
              <RevealItem
                key={module.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                <p className="mt-2 text-muted-foreground">{module.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {module.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>

        {/* Core Workflows */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground">Core Workflows</h2>

          <div className="mt-8 space-y-8">
            {/* Quote to Booking */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Quote → Booking → Invoice</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                  The most common workflow: propose work with a quote, get approval, then convert to a booking or a project depending on whether the work involves one client or multiple clients. Invoices are generated automatically from the confirmed work.
                </p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Step 1:</strong> Create quote with services and pricing</p>
                  <p><strong>Step 2:</strong> Change quote status to "Accepted" when client approves</p>
                  <p><strong>Step 3:</strong> Choose "Convert to Booking" for a single client, or "Convert to Project" when the quote includes two or more clients</p>
                  <p><strong>Step 4:</strong> Review the booking or project details</p>
                  <p><strong>Step 5:</strong> Post invoice to General Ledger (if accounting is required)</p>
              </div>
            </div>

            {/* Payment Recording */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Recording Payments</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Track money received from clients against invoices.
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p><strong>Step 1:</strong> Go to Finance → Payments</p>
                <p><strong>Step 2:</strong> Click "+ Record Payment"</p>
                <p><strong>Step 3:</strong> Link to invoice, enter amount, date, method</p>
                <p><strong>Step 4:</strong> Invoice status updates (Partially Paid → Paid)</p>
              </div>
            </div>

            {/* Financial Reporting */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Financial Reporting</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Monitor business health and generate reports.
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p><strong>View:</strong> Dashboard → See real-time revenue, bookings, invoices</p>
                <p><strong>Analyze:</strong> Finance → Overview → Review detailed metrics</p>
                <p><strong>Export:</strong> Reports → Download CSV/PDF for external use or accounting software</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Guidelines"
            title="Best practices for SBMS"
            description="Proven strategies for clean data and smooth workflows."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {bestPractices.map((section) => (
              <div key={section.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-lg font-semibold text-foreground">{section.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>

          <div className="mt-8 space-y-4">
            {[
              {
                q: 'Can I create multiple quotes for one client?',
                a: 'Yes, create as many quotes as needed. Each quote can be tracked independently and converted to bookings separately.',
              },
              {
                q: 'What happens when I post an invoice to GL?',
                a: 'The system creates accounting entries (double-entry bookkeeping). Debit to Accounts Receivable, Credit to Sales Revenue. Balances are automatically maintained.',
              },
              {
                q: 'Can I edit an invoice after posting?',
                a: 'No, posted invoices are locked. Create a credit note or adjustment instead for corrections.',
              },
              {
                q: 'How do I track partial payments?',
                a: 'Record each payment separately. Invoice status updates to "Partially Paid" until the full amount is received.',
              },
              {
                q: 'Can I bulk import existing data?',
                a: 'Yes, contact support or your admin for bulk import assistance. CSV import is available for most modules.',
              },
              {
                q: 'Where do I see overdue invoices?',
                a: 'Go to Finance → Invoices and filter by status "Overdue" to see past-due amounts.',
              },
            ].map((faq) => (
              <Reveal key={faq.q}>
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="font-semibold text-foreground">{faq.q}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground">Troubleshooting</h2>

          <div className="mt-8 space-y-4">
            {[
              {
                problem: "Can't convert quote to booking",
                solution: 'Quote must be in "Accepted" status. Ensure at least one service is added. Check that client is selected.',
              },
              {
                problem: 'Invoice amount incorrect',
                solution: 'Verify all services have prices entered. Check quantities are correct. Ensure no taxes or discounts changed the total.',
              },
              {
                problem: "Payment won't record",
                solution: 'Ensure invoice is linked. Payment amount must be positive. Check date is not in the future.',
              },
              {
                problem: 'Lost access to page',
                solution: 'You may need additional permissions. Contact your organization administrator to grant access.',
              },
              {
                problem: 'Page loads slowly or times out',
                solution: 'Clear browser cache. Try a different browser. Use wired internet. Retry during off-peak hours.',
              },
            ].map((item) => (
              <div key={item.problem} className="rounded-xl border border-border bg-card p-4">
                <p className="font-semibold text-foreground">{item.problem}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps CTA */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">Ready to master SBMS?</h3>
          <p className="mt-2 text-muted-foreground">
            Take our structured training program with videos, exercises, and certification.
          </p>
          <div className="mt-6">
            <Link
              href="/nakel-pos/training"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              Start Training Program
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
