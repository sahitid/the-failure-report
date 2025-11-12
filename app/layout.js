import { Space_Grotesk, Inter, Bitter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bitter = Bitter({ 
  subsets: ['latin'],
  variable: '--font-bitter',
  display: 'swap',
})

export const metadata = {
  title: 'The Failure Report | Your Weekly Anti-Highlight Reel',
  description: 'A weekly anonymous newsletter that combats Penn Face culture at UPenn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${bitter.variable} font-sans`}>{children}</body>
    </html>
  )
}

