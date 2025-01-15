import { TempClasses, TempSubjects } from '@constants'
import Link from 'next/link'

import { ClassItemType } from '@types'

// import { supabase } from "@/app/(supabase)/clinet";

export const revalidate = 0

export default function Page({ searchParams }: { searchParams: { subjectId: string } }) {
  const { subjectId } = searchParams
  // const { data: subjectData } = await supabase
  //   .from("subjects")
  //   .select("*")
  //   .eq("title", subject)
  //   .single();
  // const { data: classData } = await supabase
  //   .from("classes")
  //   .select("*")
  //   .eq("subject_id", subjectData.id)
  //   .order("order_num", { ascending: true });
  const subjectData = TempSubjects.find((item) => item.id === subjectId)
  const classData = TempClasses.filter((item) => item.subject_id === subjectId)
  return (
    <div className='h-full bg-paleblue'>
      <div className='h-[100px] flex items-center text-3xl px-10'>
        <Link href='/programs/grade' className=' text-skyblue font-bold pr-10'>
          &lt;
        </Link>
        {subjectData?.syllabus && <Link href={subjectData.syllabus}>파일 다운로드하기</Link>}
        <div className='font-cafe24'>{subjectData?.title}</div>
      </div>
      <div className='bg-white rounded-3xl h-[calc(100vh-200px)]'>
        <div className='flex flex-col overflow-y-auto gap-5 pt-5 w-full'>
          {classData?.map((classItem: ClassItemType, index: number) => (
            <div key={index} className='w-full border-b-2 px-20 pb-5 flex flex-row items-center justify-between border-paleblue'>
              <div className='text-2xl font-bold'>
                {classItem.order_num}. {classItem.title}
              </div>
              <div className='text-white flex flex-row gap-10'>
                <div className='bg-btn-red py-2 px-10 w-52 rounded-full hover:ring-2 ring-buttonred'>학습지 다운</div>
                <Link href={`/class/${classItem.id}`}>
                  <div className='bg-skyblue w-52 text-center py-2 px-10 rounded-full hover:ring-2 ring-skyblue'>학습하기</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
