'use client'

import { NavigationBarLists } from '@/constants'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { CustomIcons } from '@packages/ui/components/icons'

function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const router = useRouter()

  const handleClick = (menu: string) => {
    setIsOpen(false)
    router.push(menu)
  }

  return (
    <div className='md:hidden text-white'>
      <CustomIcons name='menu' onClick={() => setIsOpen(!isOpen)} className='w-6 h-6 cursor-pointer hover:text-gray-200' />

      <div className={`fixed top-16 right-0 bottom-0 bg-text w-full transition-[max-width] duration-300 ease-in-out ${isOpen ? 'max-w-full' : 'max-w-0'}`}>
        <div className='p-4 overflow-y-auto h-full'>
          <ul className='flex flex-col space-y-2'>
            {NavigationBarLists.map((item) => (
              <li key={item.name} className='group'>
                <button
                  onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                  className='w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors'
                >
                  <span className='text-lg font-medium'>{item.name}</span>
                  <CustomIcons name='rightArrow' className={`w-5 h-5 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-90' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${activeMenu === item.name ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <ul className='pl-4 py-2 space-y-2'>
                    {item.dropdownList.map((dropItem) => (
                      <li key={dropItem.name}>
                        <div onClick={() => handleClick(dropItem.path)} className='block p-2 rounded-md hover:bg-white/10 transition-colors'>
                          {dropItem.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { MobileNavMenu }
