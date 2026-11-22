import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Providers } from '@/app/providers'

const cvFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cv',
})

export const metadata: Metadata = {
  title: 'Matthew J. Needham – Architect',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cvFont.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
