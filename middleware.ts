import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Session verification without Node.js crypto module (Edge Runtime compatible)
function verifyStaffSession(sessionValue: string) {
  try {
    const decoded = Buffer.from(sessionValue, 'base64').toString('utf8')
    const parsed = JSON.parse(decoded)
    return parsed
  } catch {
    return null
  }
}

// Protect /admin routes with session verification.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
    return NextResponse.next()
  }

  // Allow login and signup routes without authentication
  if (pathname === '/admin/login' || pathname === '/admin/signup' || pathname === '/api/admin/login' || pathname === '/api/admin/signup') {
    return NextResponse.next()
  }

  const sessionCookie = request.cookies.get('staff_session')?.value
  
  if (!sessionCookie) {
    // Redirect to login if not authenticated
    const loginUrl = new URL('/admin/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Verify the session is valid
  const session = verifyStaffSession(sessionCookie)
  if (!session) {
    // Invalid session, redirect to login
    const loginUrl = new URL('/admin/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
