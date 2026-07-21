import { Pool } from 'pg'

export type FormType = 'program' | 'talent' | 'community' | 'innovation' | 'general'

export interface FormSubmission {
  id: string
  formType: FormType
  submittedAt: string
  name?: string
  email?: string
  phone?: string
  program?: string
  skill?: string
  experience?: string
  availability?: string
  interest?: string
  event?: string
  message?: string
  [key: string]: string | undefined
}

const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_9gnoQMhuZY4k@ep-sparkling-unit-auryql7z-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS form_submissions (
      id TEXT PRIMARY KEY,
      form_type TEXT NOT NULL,
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      name TEXT,
      email TEXT,
      phone TEXT,
      program TEXT,
      skill TEXT,
      experience TEXT,
      availability TEXT,
      interest TEXT,
      event TEXT,
      message TEXT,
      formType TEXT
    )
  `)
}

export async function saveFormSubmission(payload: Record<string, string | undefined>) {
  await ensureTable()

  const formType = (payload.formType as FormType) || 'general'
  const submissionId = `submission-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

  const columns = ['id', 'form_type', 'submitted_at']
  const values = [submissionId, formType, new Date().toISOString()]
  const placeholders = ['$1', '$2', '$3']

  const fields: Array<{ key: string; value: string | undefined }> = [
    { key: 'name', value: payload.name },
    { key: 'email', value: payload.email },
    { key: 'phone', value: payload.phone },
    { key: 'program', value: payload.program },
    { key: 'skill', value: payload.skill },
    { key: 'experience', value: payload.experience },
    { key: 'availability', value: payload.availability },
    { key: 'interest', value: payload.interest },
    { key: 'event', value: payload.event },
    { key: 'message', value: payload.message },
    { key: 'formType', value: formType },
  ]

  fields.forEach((field) => {
    if (field.value !== undefined) {
      columns.push(field.key)
      values.push(field.value)
      placeholders.push(`$${values.length}`)
    }
  })

  await pool.query(
    `INSERT INTO form_submissions (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`,
    values,
  )

  return {
    id: submissionId,
    formType,
    submittedAt: new Date().toISOString(),
    ...payload,
  } as FormSubmission
}

export async function readFormSubmissions() {
  await ensureTable()

  const result = await pool.query(
    'SELECT id, form_type AS "formType", submitted_at AS "submittedAt", name, email, phone, program, skill, experience, availability, interest, event, message FROM form_submissions ORDER BY submitted_at DESC',
  )

  return result.rows as FormSubmission[]
}

export async function updateFormSubmission(id: string, updates: Record<string, string | undefined>) {
  await ensureTable()

  const allowedFields = ['name', 'email', 'phone', 'program', 'skill', 'experience', 'availability', 'interest', 'event', 'message', 'formType']
  const entries = Object.entries(updates).filter(([key]) => allowedFields.includes(key))

  if (entries.length === 0) {
    return null
  }

  const setClauses = entries.map(([key], index) => `${key} = $${index + 1}`)
  const values = entries.map(([, value]) => value ?? null)

  await pool.query(`UPDATE form_submissions SET ${setClauses.join(', ')} WHERE id = $${values.length + 1}`, [...values, id])

  const result = await pool.query(
    'SELECT id, form_type AS "formType", submitted_at AS "submittedAt", name, email, phone, program, skill, experience, availability, interest, event, message FROM form_submissions WHERE id = $1',
    [id],
  )

  return result.rows[0] as FormSubmission | null
}

export async function deleteFormSubmission(id: string) {
  await ensureTable()
  await pool.query('DELETE FROM form_submissions WHERE id = $1', [id])
}
