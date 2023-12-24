import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import ReactQueryProviders from '@/components/ReactQueryProviders'

import '../globals.css'


export const metadata: Metadata = {
  title: 'Login | Mulai',
  description: 'Tempat memulai perjalanan digital mu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ReactQueryProviders>
          {children}
        </ReactQueryProviders>
      </body>
    </html>
  )
}
