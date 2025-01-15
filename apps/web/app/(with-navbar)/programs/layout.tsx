import { ProgramNavigationBar } from '@components/ui'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-full flex flex-col'>
      <ProgramNavigationBar />
      <main className='flex-grow'>{children}</main>
    </div>
  )
}

export default Layout
