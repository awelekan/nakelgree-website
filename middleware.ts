import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protect /admin routes with a simple cookie check.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
    return NextResponse.next()
  }

  const adminUser = process.env.ADMIN_USER
  const adminPass = process.env.ADMIN_PASSWORD

  // If no admin user configured, allow access (development convenience)
  if (!adminUser || !adminPass) return NextResponse.next()

  const cookie = request.cookies.get('admin_auth')?.value || ''
  const expected = Buffer.from(`${adminUser}:${adminPass}`).toString('base64')

  if (cookie === expected) return NextResponse.next()

  // Redirect to login if not authenticated
  const loginUrl = new URL('/admin/login', request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
