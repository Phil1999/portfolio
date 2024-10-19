import type { Metadata } from 'next'
import { fonts } from './fonts'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Philip Lee',
  description: 'Portfolio website for Philip Lee.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fonts.mPlus.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
