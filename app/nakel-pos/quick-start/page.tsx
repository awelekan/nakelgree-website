import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Service Based Management System App - Quick Start Guide',
  description: 'Get up and running with the Service Based Management System App in 30 minutes. Step-by-step guide for your first quote, booking, project, and payment workflow.',
}

export default function QuickStartPage() {
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
        eyebrow="Quick Start Guide"
        title="Get started in 30 minutes"
        description="The fastest path from login to your first completed quote-to-payment cycle. No unnecessary steps, just the essentials."
      />

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Step 1 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">Login & Explore the Dashboard</h2>
              <p className="mt-3 text-muted-foreground">
                Open the Service Based Management System App at https://sbms.nakelgreen.com.ng and sign in with your credentials. You'll land on the dashboard with business metrics, shortcuts to create quotes, bookings, projects, and a financial overview.
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-mono">📍 Main areas: Sidebar (navigation), Header (profile), Main workspace (content)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">Create Your First Client</h2>
              <p className="mt-3 text-muted-foreground">
                Every quote needs a client. Create one now so you're ready to build quotes.
              </p>
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-card p-4">
                <p className="font-semibold text-sm text-foreground">Steps:</p>
                <ol className="space-y-1 text-sm text-muted-foreground">
                  <li>1. Click <strong>Clients</strong> in the sidebar</li>
                  <li>2. Click <strong>+ New Client</strong></li>
                  <li>3. Fill in: Name, Email, Phone, Address (optional)</li>
                  <li>4. Click <strong>Save</strong></li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">Add Services with Pricing</h2>
              <p className="mt-3 text-muted-foreground">
                Services are what you sell. Define them once and reuse them in any quote.
              </p>
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-card p-4">
                <p className="font-semibold text-sm text-foreground">Steps:</p>
                <ol className="space-y-1 text-sm text-muted-foreground">
                  <li>1. Click <strong>Services</strong> in the sidebar</li>
                  <li>2. Click <strong>+ New Service</strong></li>
                  <li>3. Enter: Service Name, Description, Unit Price</li>
                  <li>4. Click <strong>Save</strong></li>
                  <li>5. Repeat for 2-3 services</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">Create Your First Quote</h2>
              <p className="mt-3 text-muted-foreground">
                Now build a quote using the client and services you just created. For multi-client work, use the Projects module so a quote can include two or more clients as a single project scope.
              </p>
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-card p-4">
                <p className="font-semibold text-sm text-foreground">Steps:</p>
                <ol className="space-y-1 text-sm text-muted-foreground">
                  <li>1. Click <strong>Quotes</strong> in the sidebar</li>
                  <li>2. Click <strong>+ New Quote</strong></li>
                  <li>3. Select your client from the dropdown</li>
                  <li>4. Click <strong>+ Add Service</strong> and choose a service</li>
                  <li>5. Enter quantity (e.g., 2)</li>
                  <li>6. Set expiration date (e.g., 30 days from today)</li>
                  <li>7. Click <strong>Save</strong></li>
                </ol>
              </div>
              <p className="mt-3 text-sm text-primary font-semibold">✓ Your first quote is created!</p>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
              5
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">Accept & Convert to Booking</h2>
              <p className="mt-3 text-muted-foreground">
                Simulate accepting the quote, then convert it to a booking. This creates an invoice automatically.
              </p>
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-card p-4">
                <p className="font-semibold text-sm text-foreground">Steps:</p>
                <ol className="space-y-1 text-sm text-muted-foreground">
                  <li>1. Open the quote you just created</li>
                  <li>2. Click the status dropdown and change to <strong>Accepted</strong></li>
                  <li>3. Click <strong>Convert to Booking</strong></li>
                  <li>4. Review the booking details</li>
                  <li>5. Click <strong>Confirm</strong></li>
                </ol>
              </div>
              <p className="mt-3 text-sm text-primary font-semibold">✓ Booking created + Invoice auto-generated!</p>
            </div>
          </div>
        </section>

        {/* Step 6 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
              6
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">Record a Payment</h2>
              <p className="mt-3 text-muted-foreground">
                Complete the cycle by recording a payment against the invoice.
              </p>
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-card p-4">
                <p className="font-semibold text-sm text-foreground">Steps:</p>
                <ol className="space-y-1 text-sm text-muted-foreground">
                  <li>1. Go to <strong>Finance → Payments</strong></li>
                  <li>2. Click <strong>+ Record Payment</strong></li>
                  <li>3. Select the invoice you just created</li>
                  <li>4. Enter the payment amount</li>
                  <li>5. Select payment date and method (Cash, Bank Transfer, etc.)</li>
                  <li>6. Click <strong>Save</strong></li>
                </ol>
              </div>
              <p className="mt-3 text-sm text-primary font-semibold">✓ Payment recorded + Invoice marked as Paid!</p>
            </div>
          </div>
        </section>

        {/* What You've Accomplished */}
        <section className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h2 className="text-2xl font-bold text-foreground">What you've accomplished</h2>
          <div className="mt-6 grid gap-3">
            {[
              'Created a client record',
              'Added services with pricing',
              'Built your first quote',
              'Converted quote to booking',
              'Generated an invoice automatically',
              'Recorded a payment',
              'Completed the full workflow',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-primary" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">Next steps</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground">Explore More</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Check out Finance → Overview to see your business metrics update.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground">Add Real Data</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Create your actual clients and services. Start using the SBMS App for real work.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground">Learn More</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Read the Complete User Guide for advanced features and best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Learn More CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">Want to learn more?</h3>
          <p className="mt-2 text-muted-foreground">
            Dive deeper into SBMS with our comprehensive guides and training.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/nakel-pos/user-guide"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Read Full User Guide
            </Link>
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
