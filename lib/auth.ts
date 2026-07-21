import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyStaffSession } from '@/lib/staff-auth'

export type StaffRole = 'admin' | 'manager' | 'staff'

export interface StaffSessionUser {
  id: string
  name: string
  email: string
  role: StaffRole
}

export async function getCurrentStaffUser() {
  const cookieStore = await cookies()
  const sessionValue = cookieStore.get('staff_session')?.value

  if (!sessionValue) {
    return null
  }

  return verifyStaffSession(sessionValue)
}

export async function requireStaffAccess(allowedRoles: StaffRole[] = ['admin', 'manager']) {
  const user = await getCurrentStaffUser()

  if (!user || !allowedRoles.includes(user.role)) {
    redirect('/admin/login')
  }

  return user
}
