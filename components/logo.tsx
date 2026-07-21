import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="NakelGreen home"
      className={cn('flex items-center gap-2', className)}
    >
      <Image
        src="/nakelgreen-logo.png"
        alt="NakelGreen logo"
        width={160}
        height={80}
        priority
        className={cn('h-9 w-auto', !showWordmark && 'h-8')}
      />
      {!showWordmark && <span className="sr-only">NakelGreen</span>}
    </Link>
  )
}
