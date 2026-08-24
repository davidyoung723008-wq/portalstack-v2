import './globals.css'

export const metadata = {
  title: 'PortalStack V2',
  description: 'Private Admin Portal',
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
