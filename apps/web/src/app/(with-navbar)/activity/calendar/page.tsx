import { CalendarView } from '@components/common'

export default async function Calendar() {
  return (
    <div className='w-full pt-10 h-[90vh] justify-center items-center text-2xl bg-background'>
      <CalendarView />
    </div>
  )
}
