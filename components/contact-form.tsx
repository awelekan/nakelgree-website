'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const interests = [
  'Enroll in a program',
  'Join the talent pool',
  'Hire talent',
  'Co-working / Innovation Hub',
  'Partnership',
  'General enquiry',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-foreground">
          Thank you for reaching out
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          We&apos;ve received your message and a member of the NakelGreen team
          will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="firstName"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Ada"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="lastName"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Obi"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="interest"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            defaultValue={interests[0]}
          >
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Tell us how we can help..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] active:scale-95 sm:w-auto"
      >
        Send message
        <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
