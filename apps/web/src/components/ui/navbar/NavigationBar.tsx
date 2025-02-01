import { NavigationBarLists } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

import { MobileNavMenu } from './MobileNav'

async function NavigationBar() {
  // const session = await getServerSession();
  return (
    <nav className='h-navbar-height fixed flex w-full bg-text text-background z-10'>
      <div className='px-4 md:px-6 max-w-7xl h-full w-full mx-auto flex justify-between items-center'>
        <div className='flex items-center h-full py-1'>
          <Link href='/' className='relative h-full w-60 flex items-center'>
            <Image src='/assets/images/Logo-black.png' className='invert object-contain' alt='Logo' width={832} height={137} />
          </Link>
        </div>
        <div className='h-full flex-1 hidden md:flex justify-end max-w-3xl'>
          {NavigationBarLists.map((item, index) => (
            <div key={index} className='relative group flex-1 h-full flex text-base'>
              <p className='w-36 h-full flex items-center justify-center group-hover:bg-text-secondary group-hover:shadow-inset-b'>{item.name}</p>
              <div className='absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 flex flex-col bg-text top-16 w-36 text-primary transition-opacity duration-300 rounded-b-md'>
                <div className='flex flex-col w-full'>
                  {item.dropdownList.map((dropdownItem) => (
                    <div key={dropdownItem.name} className='flex text-sm w-full bg-transparent p-3'>
                      <Link href={dropdownItem.path} className='w-full hover:underline'>
                        {dropdownItem.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <MobileNavMenu />
      </div>
    </nav>
  )
}

export { NavigationBar }
