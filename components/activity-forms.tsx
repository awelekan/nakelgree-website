'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const formConfigs = {
  program: {
    title: 'Program application',
    description: 'Tell us which track you want to join and what you hope to learn.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'program', label: 'Program of interest', type: 'select', options: ['Data Analytics', 'Software Engineering', 'UI/UX Design', 'Cybersecurity', 'Cloud Computing', 'Product Management', 'Digital Marketing'], required: true },
      { name: 'experience', label: 'Experience level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'], required: true },
      { name: 'message', label: 'Why this program?', type: 'textarea', required: true },
    ],
  },
  talent: {
    title: 'Talent pool registration',
    description: 'Share your background so we can match you with opportunities.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone number', type: 'text', required: true },
      { name: 'skill', label: 'Primary skill', type: 'text', required: true },
      { name: 'availability', label: 'Availability', type: 'select', options: ['Immediate', '1–3 months', '3+ months'], required: true },
      { name: 'message', label: 'Tell us about yourself', type: 'textarea', required: true },
    ],
  },
  community: {
    title: 'Community event registration',
    description: 'Reserve your spot for an upcoming event or meetup.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'event', label: 'Event interest', type: 'select', options: ['Hackathon', 'Meetup', 'Training Session', 'Open House'], required: true },
      { name: 'message', label: 'Anything else we should know?', type: 'textarea', required: false },
    ],
  },
  innovation: {
    title: 'Innovation hub request',
    description: 'Let us know how you would like to use the hub or work with our team.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'interest', label: 'What do you need?', type: 'select', options: ['Co-working desk', 'Startup incubation', 'Mentorship', 'Event space', 'Other'], required: true },
      { name: 'message', label: 'Tell us more', type: 'textarea', required: true },
    ],
  },
  general: {
    title: 'General enquiry',
    description: 'Send us a general message and we will follow up shortly.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'interest', label: 'How can we help?', type: 'select', options: ['Partnership', 'Hiring', 'Training', 'General enquiry'], required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
  },
}

type FormType = keyof typeof formConfigs

interface ActivityFormsProps {
  formType?: FormType
}

export function ActivityForms({ formType = 'general' }: ActivityFormsProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const config = formConfigs[formType]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>
    payload.formType = formType
    payload._startTime = String(Date.now())

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok && data.success) {
        setSubmitted(true)
      } else {
        setErrorMessage(data.message || 'Your submission could not be processed.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-foreground">Thanks for your submission</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your request has been saved and our team will follow up shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
        >
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">{config.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{config.description}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          defaultValue=""
        />

        {config.fields.map((field) => (
          <div key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : 'sm:col-span-1'}>
            <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-foreground">
              {field.label}
            </label>
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                rows={5}
                className="w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            )}
          </div>
        ))}
      </div>

      {errorMessage ? (
        <p className="mt-4 text-sm font-medium text-destructive">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? 'Submitting…' : 'Submit request'}
        <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
