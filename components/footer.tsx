import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { siteConfig } from '@/lib/site'

const footerNav = [
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Programs', href: '/programs' },
      { label: 'Innovation Hub', href: '/innovation' },
      { label: 'Talent', href: '/talent' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Events', href: '/community' },
      { label: 'Hackathons', href: '/community' },
      { label: 'Meetups', href: '/community' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Software Engineering', href: '/programs' },
      { label: 'Data Analytics', href: '/programs' },
      { label: 'UI/UX Design', href: '/programs' },
      { label: 'Cybersecurity', href: '/programs' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description} We help people learn, work, and innovate
              in the growing African tech ecosystem.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" />
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary" />
                {siteConfig.location}
              </li>
            </ul>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-sm font-medium text-primary">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
