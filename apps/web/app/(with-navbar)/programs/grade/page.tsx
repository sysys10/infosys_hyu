'use client'

import { TempSubjects, buttonColors, gradeCategories } from '@constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { SubjectType } from '@types'

export default function Page() {
  // const [subjects, setSubjects] = useState<Subject[]>(TempSubjects)
  const subjects: SubjectType[] = TempSubjects
  const [category, setCategory] = useState('전체')

  // useEffect(() => {
  //   const fetchSubjects = async () => {
  //     // const { data } = await supabase.from("subjects").select("*");
  //     // setSubjects(data as Subject[]);
  //   };
  //   fetchSubjects();
  // }, []);

  console.log(subjects)

  const filteredSubjects = subjects.filter((subject) => {
    if (category === '전체') return true
    return subject.grade.includes(category)
  })

  return (
    <div className='w-screen h-full bg-paleblue gap-[50px] grid grid-cols-5 px-10 pt-10 justify-center items-center text-2xl'>
      <div className='col-span-1 h-full pb-10'>
        <div className='flex flex-col bg-skyblue h-full rounded-2xl'>
          {gradeCategories.map((item, index) => (
            <button
              key={index}
              className={`py-4 px-10 border-b-2 flex justify-between ${
                item === category ? 'bg-white text-skyblue' : 'bg-skyblue text-white'
              } ${index === 0 ? 'rounded-t-2xl' : ''}`}
              onClick={() => setCategory(item)}
            >
              <span>{item}</span>
              {item === category && <span>{'>'}</span>}
            </button>
          ))}
        </div>
      </div>
      <div className='col-span-4 flex justify-center items-start'>
        <div className='grid grid-cols-3 overflow-y-auto w-full h-[calc(100vh-240px)]'>
          {filteredSubjects?.map((item, index) => (
            <div key={index} className='flex flex-col mb-8 mx-4 h-fit items-center'>
              <Link href={`/classes?subjectId=${item.id}`} className='w-full'>
                <div className='relative w-full' style={{ paddingBottom: '75%' }}>
                  <Image src={`/assets/images/${item.imgSrc}`} alt={item.title} className='absolute top-0 left-0 w-full h-full object-cover' layout='fill' />
                </div>
                <div className={`${buttonColors[index % buttonColors.length]} w-full text-white text-center py-2`}>{item.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
