import { NavigationBar } from '@components/ui'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen flex flex-col'>
      <NavigationBar />
      <div className='flex-grow'>{children}</div>
    </div>
  )
}
