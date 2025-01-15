import Link from 'next/link'

export default async function Home() {
  return (
    <div className="relative w-screen h-full flex justify-center items-center text-2xl bg-no-repeat bg-bottom bg-contain bg-[url('/assets/images/bottom_sheet.png')]">
      <div className='grid grid-cols-2 h-3/4 w-3/4 mb-10 text-white font-cafe24 text-2xl gap-4'>
        <div className='grid grid-rows-3 gap-4'>
          <Link className='w-full row-span-2 flex flex-col gap-2 bg-skyblue h-full text-4xl rounded-xl p-4 hover:ring-2 ring-skyblue' href='/programs/grade'>
            <span>프로그램</span>
            <span>선택</span>
          </Link>
          <Link className='w-full row-span-2 h-full rounded-xl text-2xl p-4 bg-btn-green hover:ring-2 ring-btn-green' href='/#'>
            <div className='w-full'>
              수업계획서
              <br />
              생성
            </div>
          </Link>
        </div>
        <div className='grid grid-rows-3'>
          <div className='row-span-2 grid grid-rows-2 gap-4 mb-4'>
            <Link className='w-full rounded-xl text-2xl p-4 bg-btn-red hover:ring-2 ring-btn-red' href='/#'>
              <div className='w-full'>
                학습지
                <br />
                다운로드
              </div>
            </Link>
            <Link className='w-full rounded-xl text-2xl p-4 bg-btn-yellow hover:ring-2 ring-btn-yellow' href='/#'>
              <div className='w-full'>학생관리</div>
            </Link>
          </div>
          <Link className='w-full h-full rounded-xl text-2xl p-4 bg-paleyellow hover:ring-2 ring-paleyellow' href='/#'>
            <div className='w-full text-btn-yellow'>comming soon...</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
