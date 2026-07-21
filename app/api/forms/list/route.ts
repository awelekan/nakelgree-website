import { NextResponse } from 'next/server'
import { readFormSubmissions } from '@/lib/form-storage'

export async function GET() {
  try {
    const submissions = await readFormSubmissions()
    return NextResponse.json({ submissions })
  } catch (error) {
    console.error('Failed to fetch form submissions', error)
    return NextResponse.json(
      { success: false, message: 'Unable to load submissions.' },
      { status: 500 },
    )
  }
}
