import Link from 'next/link'

import { CustomIcons } from '@packages/ui/components/icons'

export function AboutButton() {
  return (
    <Link
      href='/about'
      className='bg-background-secondary text-infosys-purple text-sm md:text-lg flex items-center gap-x-2 hover:bg-background-secondary/80 rounded-md px-2 py-1 font-semibold'
    >
      About Us
      <CustomIcons name='send' className='w-4 h-4' />
    </Link>
  )
}
