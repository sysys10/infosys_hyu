import { getNoticesWithDetails } from '@/services/notices'
import { AboutButton, CalendarView, MasonryGridGallery, NoticeCarousel } from '@components/common'
import { Suspense } from 'react'

export default async function Home() {
  const notices = await getNoticesWithDetails()

  return (
    <div className='w-full h-full justify-center items-center text-2xl bg-background'>
      <div className='flex flex-col justify-center items-center h-[calc(100vh-var(--navbar-height))] bg-[url(/assets/images/1.jpg)] bg-cover bg-center'>
        <div className='w-full h-full flex flex-col items-center justify-center bg-black/20'>
          <h1 className='text-5xl px-4 md:text-7xl mb-10 font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-100 to-blue-500'>
            HYU
            <br />
            INFORMATION SYSTEM
          </h1>
        </div>
      </div>

      <div className='flex flex-col h-screen mt-10'>
        <h1 className='text-4xl text-center font-semibold pt-10 pb-16 text-infosys-blue'>Latest INFOSYS News</h1>
        <Suspense fallback={<div className='text-center'>Loading notices...</div>}>
          <NoticeCarousel initialNotices={notices} />
        </Suspense>
      </div>

      <div className='w-full h-64 bg-gradient-to-br mt-20 from-infosys-purple to-infosys-blue flex flex-col items-center justify-center gap-y-8'>
        <h1 className='text-2xl md:text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200 flex flex-col items-center'>
          한양대학교 정보시스템학과 제 24대 학생회 정원
        </h1>
        <AboutButton />
      </div>

      <div className='flex flex-col h-screen mt-8'>
        <h1 className='text-4xl text-center font-semibold pb-10 mt-8 text-infosys-purple'>Schedules</h1>
        <Suspense fallback={<div className='text-center'>Loading calendar...</div>}>
          <CalendarView />
        </Suspense>
      </div>

      <div className='flex flex-col h-screen mt-8'>
        <h1 className='text-4xl text-center font-semibold pb-16 mt-8 text-infosys-purple'>Gallery</h1>
        <Suspense fallback={<div className='text-center'>Loading gallery...</div>}>
          <MasonryGridGallery />
        </Suspense>
      </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'
