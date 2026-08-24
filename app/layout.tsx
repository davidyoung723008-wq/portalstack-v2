import './globals.css'
import { useState } from 'react'

export default function Home() {
...
import './globals.css'

export const metadata = {
  title: 'PortalStack',
  description: 'Dashboard Starter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
