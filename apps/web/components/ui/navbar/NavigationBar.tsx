import { LogOutButton } from '@/components/common'
import Image from 'next/image'
import Link from 'next/link'

function NavigationBar() {
  // const session = await getServerSession();
  return (
    <nav className='h-navbar-height grid grid-cols-3 bg-white space-between justify-center drop-shadow-lg'>
      <div></div>
      <div className='max-h-full flex items-center justify-center'>
        <Link href='/'>
          <Image src='/assets/images/logo_blue.png' alt='Logo' width={135} height={72} />
        </Link>
      </div>
      <div className='flex space-x-4 max-h-full justify-end items-center mx-4'>
        <LogOutButton />
        <Link href='#'>
          <Image src='/assets/images/notification.png' alt='Notifications' width={52} height={52} className='obejct-contain' />
        </Link>
        <Link href='#'>
          <Image src='/assets/images/mypage.png' alt='My Page' width={52} height={52} className='object-contain' />
        </Link>
      </div>
    </nav>
  )
}

export { NavigationBar }
