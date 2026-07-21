import crypto from 'crypto'
import { pool } from '@/lib/db'

export type StaffRole = 'admin' | 'manager' | 'staff'

export interface StaffUser {
  id: string
  name: string
  email: string
  role: StaffRole
}

const SALT = process.env.AUTH_SALT || 'nakelgreen-staff-salt'

function hashPassword(password: string) {
  return crypto.createHash('sha256').update(`${SALT}:${password}`).digest('hex')
}

export function verifyStaffSession(sessionValue: string) {
  try {
    const decoded = Buffer.from(sessionValue, 'base64').toString('utf8')
    const parsed = JSON.parse(decoded) as StaffUser

    return parsed
  } catch {
    return null
  }
}

async function ensureStaffTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS staff_users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'staff',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  await pool.query(`
    INSERT INTO staff_users (id, name, email, password_hash, role)
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT (email) DO NOTHING
  `, [
    `staff-${Date.now()}`,
    'Default Admin',
    'admin@nakelgreen.com',
    hashPassword('nakelgreen2026'),
    'admin',
  ])
}

export async function createStaffUser(input: { name: string; email: string; password: string; role?: StaffRole }) {
  await ensureStaffTable()

  const id = `staff-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const passwordHash = hashPassword(input.password)

  await pool.query(
    'INSERT INTO staff_users (id, name, email, password_hash, role) VALUES ($1, $2, $3, $4, $5)',
    [id, input.name, input.email, passwordHash, input.role || 'staff'],
  )

  return { id, name: input.name, email: input.email, role: input.role || 'staff' } as StaffUser
}

export async function findStaffUserByEmail(email: string) {
  await ensureStaffTable()

  const result = await pool.query('SELECT id, name, email, role FROM staff_users WHERE email = $1', [email])
  return result.rows[0] as StaffUser | undefined
}

export async function verifyStaffCredentials(email: string, password: string) {
  await ensureStaffTable()

  const result = await pool.query('SELECT id, name, email, role FROM staff_users WHERE email = $1 AND password_hash = $2', [email, hashPassword(password)])
  return result.rows[0] as StaffUser | undefined
}
