import { NextResponse } from 'next/server'
import { deleteFormSubmission, updateFormSubmission } from '@/lib/form-storage'

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const payload = await request.json()
    const updated = await updateFormSubmission(id, payload)

    return NextResponse.json({ success: true, submission: updated })
  } catch (error) {
    console.error('Failed to update submission', error)
    return NextResponse.json(
      { success: false, message: 'Unable to update submission.' },
      { status: 500 },
    )
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await deleteFormSubmission(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete submission', error)
    return NextResponse.json(
      { success: false, message: 'Unable to delete submission.' },
      { status: 500 },
    )
  }
}
