'use client'

import { format, getDay, parse, startOfWeek } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Calendar, NavigateAction, ToolbarProps, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import './calendar.css'

const locales = {
  ko: ko
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

interface Event {
  id: string
  title: string
  start: Date
  end: Date
  color?: string
}

interface CalendarViewProps {
  events?: Event[]
}

const myEvents = [
  {
    id: '1',
    title: '회의',
    start: new Date(2024, 0, 15, 12, 0),
    end: new Date(2024, 0, 15, 12, 0),
    color: '#4F46E5'
  },
  {
    id: '2',
    title: '워크샵',
    start: new Date(2025, 0, 16),
    end: new Date(2025, 0, 18),
    color: '#0EA5E9'
  },
  {
    id: '3',
    title: '미팅',
    start: new Date(2025, 0, 17),
    end: new Date(2025, 0, 17),
    color: '#10B981'
  }
]

// 커스텀 툴바 컴포넌트
const CustomToolbar = ({ onNavigate, label }: ToolbarProps<Event>) => {
  return (
    <div className='flex justify-between items-center p-2'>
      <button onClick={() => onNavigate('PREV' as NavigateAction)} className='p-2 rounded-lg hover:bg-gray-100 transition-colors'>
        ←
      </button>
      <span className='text-lg font-medium'>{label}</span>
      <button onClick={() => onNavigate('NEXT' as NavigateAction)} className='p-2 rounded-lg hover:bg-gray-100 transition-colors'>
        →
      </button>
    </div>
  )
}

const eventStyleGetter = (event: Event) => {
  return {
    style: {
      height: '20px',
      backgroundColor: event.color || '#4F46E5',
      borderRadius: '6px',
      opacity: 0.95,
      color: '#fff',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start'
    }
  }
}

const dayPropGetter = (date: Date) => {
  const today = new Date()
  if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
    return {
      style: {
        backgroundColor: '#F3F4F6',
        borderRadius: '8px'
      }
    }
  }
  return {}
}

export function CalendarView({ events = myEvents }: CalendarViewProps) {
  return (
    <div className='calendar-wrapper h-full max-w-5xl mx-auto w-full'>
      <div className='calendar-container bg-background rounded-xl h-full'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 'calc(100%)' }}
          defaultView='month'
          views={['month']}
          tooltipAccessor='title'
          eventPropGetter={eventStyleGetter}
          dayPropGetter={dayPropGetter}
          components={{
            toolbar: CustomToolbar
          }}
          messages={{
            noEventsInRange: '해당 기간에 일정이 없습니다.'
          }}
        />
      </div>
    </div>
  )
}
