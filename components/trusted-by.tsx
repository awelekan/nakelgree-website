import React from 'react'

const logos = [
  { name: 'Government Agency', src: '/images/logo-placeholder-1.svg' },
  { name: 'University', src: '/images/logo-placeholder-2.svg' },
  { name: 'Fintech', src: '/images/logo-placeholder-3.svg' },
  { name: 'Enterprise', src: '/images/logo-placeholder-4.svg' },
]

export function TrustedBy() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">Trusted by</h3>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 items-center">
        {logos.map((l) => (
          <div key={l.name} className="flex items-center justify-center">
            <img src={l.src} alt={l.name} className="h-12 w-auto object-contain" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
