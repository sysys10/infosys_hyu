import { NavigationBar } from '@/components'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '@packages/ui/globals.css'

import { Providers } from '../components/providers'

const nanumSquareNeo = localFont({
  src: [
    {
      path: '../../../packages/shared/fonts/nanumgothic/NanumSquareNeo-Variable.woff2',
      weight: '45 920',
      style: 'normal'
    }
  ],
  variable: '--font-nanum'
})
const cafe24ssurround = localFont({
  src: [
    {
      path: '../../../packages/shared/fonts/cafe24ssurround/Cafe24Ssurround-v2.0.woff2',
      weight: '45 920',
      style: 'normal'
    }
  ],
  variable: '--font-cafe24'
})
export const metadata: Metadata = {
  title: '코끼리가그랬어 놀봄교실',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`${cafe24ssurround.variable} ${nanumSquareNeo.variable} antialiased h-screen flex flex-col text-2xl`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
