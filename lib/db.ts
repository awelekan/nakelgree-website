import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_9gnoQMhuZY4k@ep-sparkling-unit-auryql7z-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

export const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})
