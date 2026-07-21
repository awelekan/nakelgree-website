import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'
import ChatHost from '@/components/chat/ChatHost'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NakelGreen — Learn. Work. Innovate.',
    template: '%s | NakelGreen',
  },
  description:
    'NakelGreen is an African EdTech and innovation hub empowering people with digital skills through a Tech Academy, co-working space, innovation lab, and talent placement.',
  keywords: [
    'NakelGreen',
    'EdTech',
    'digital skills',
    'tech academy',
    'innovation hub',
    'co-working space',
    'talent placement',
    'Africa tech',
    'Nigeria',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'NakelGreen — Learn. Work. Innovate.',
    description:
      'An African innovation hub where people learn digital skills, build, and launch careers.',
    type: 'website',
  },
  icons: {
    icon: '/nakelgreen-logo.png',
    apple: '/nakelgreen-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1210' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatHost />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
