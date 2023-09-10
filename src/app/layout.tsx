import '@/styles/tailwind.css'
import '@/styles/global.css'

import type { Metadata } from 'next'
import { Source_Sans_3, Titillium_Web } from 'next/font/google'

import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

const sourceSans3 = Source_Sans_3({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  display: 'swap',
})

const titilliumWeb = Titillium_Web({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-titillium-web',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'React World',
  description: 'React World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${sourceSans3.variable} ${titilliumWeb.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
