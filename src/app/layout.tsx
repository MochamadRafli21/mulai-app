import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";

import './globals.css'


export const metadata: Metadata = {
  title: 'Mulai',
  description: 'Tempat memulai perjalanan digital mu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
