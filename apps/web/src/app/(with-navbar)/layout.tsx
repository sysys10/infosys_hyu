import { Footer, NavigationBar } from '@components/ui'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen flex flex-col'>
      <NavigationBar />
      <div className='flex-1 mt-navbar-height'>{children}</div>
      <Footer />
    </div>
  )
}
