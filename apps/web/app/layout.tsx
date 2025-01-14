
import "@packages/ui/globals.css"
import { Providers } from "@/components/providers"
import localFont from 'next/font/local'

const pretendard = localFont({
  src: [
    {
      path: '../../packages/fonts/pretendard/PretendardVariable.woff2',
      weight: '45 920',
      style: 'normal',
    }
  ],
  variable: '--font-pretendard',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
