import { createClient } from '@/utils'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const schedules = await supabase.from('schedule').select('*')
  return NextResponse.json(schedules)
}

export async function POST(request: Request) {
  const { title, content, author } = await request.json()
  const supabase = await createClient()
  const schedule = await supabase.from('schedule').insert({ title, content, author })
  return NextResponse.json(schedule)
}

export async function DELETE(request: Request) {
  const { scheduleId } = await request.json()
  const supabase = await createClient()
  const schedule = await supabase.from('schedule').delete().eq('scheduleId', scheduleId)
  return NextResponse.json(schedule)
}
