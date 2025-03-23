import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PixelForge',
  description: 'UI/UX Challenge',
  generator: 'Hemanshu Tala',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
