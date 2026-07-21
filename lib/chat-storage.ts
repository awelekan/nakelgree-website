import { Pool } from 'pg'

export interface StoredChat {
  id: string
  createdAt: string
  messages: Array<{ role: string; content: string }>
}

const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_9gnoQMhuZY4k@ep-sparkling-unit-auryql7z-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS chats (
      id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      messages JSONB NOT NULL
    )
  `)
}

export async function saveChat(messages: Array<{ role: string; content: string }>) {
  await ensureTable()
  const id = `chat-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  await pool.query('INSERT INTO chats (id, messages) VALUES ($1, $2)', [id, JSON.stringify(messages)])
  return { id, createdAt: new Date().toISOString(), messages } as StoredChat
}

export async function readChats(limit = 50) {
  await ensureTable()
  const res = await pool.query('SELECT id, created_at AS "createdAt", messages FROM chats ORDER BY created_at DESC LIMIT $1', [limit])
  return res.rows.map((r: any) => ({ id: r.id, createdAt: r.createdAt, messages: r.messages })) as StoredChat[]
}

export async function readChat(id: string) {
  await ensureTable()
  const res = await pool.query('SELECT id, created_at AS "createdAt", messages FROM chats WHERE id = $1', [id])
  if (!res.rows[0]) return null
  const r = res.rows[0]
  return { id: r.id, createdAt: r.createdAt, messages: r.messages } as StoredChat
}
