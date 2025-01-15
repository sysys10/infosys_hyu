'use client'

import { ProgramNavigationBarList } from '@constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ProgramNavigationBar = () => {
  const pathname = usePathname()
  return (
    <nav className='h-[100px] flex gap-5 justify-center items-center text-2xl font-cafe24'>
      {ProgramNavigationBarList.map((v) => (
        <Link
          href={v.to}
          key={v.value}
          className={`${pathname === v.to ? 'bg-skyblue text-white' : 'bg-paleblue text-skyblue'} rounded-full py-2 px-20 hover:ring-2 ring-paleblue`}
        >
          {v.label}
        </Link>
      ))}
    </nav>
  )
}

export { ProgramNavigationBar }
