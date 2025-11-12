import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Failure Report | Your Weekly Anti-Highlight Reel',
  description: 'A weekly anonymous newsletter that combats Penn Face culture at UPenn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

