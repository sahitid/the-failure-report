'use client'

import { useState } from 'react'
import Header from './components/Header'
import SetbackSection from './components/SetbackSection'
import AMASection from './components/AMASection'
import PollSection from './components/PollSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 py-8 px-4">
      {/* Email Container - mimics email client max-width */}
      <div className="email-container bg-white shadow-lg border border-neutral-200">
        <Header />
        <SetbackSection />
        <AMASection />
        <PollSection />
        <Footer />
      </div>
    </main>
  )
}

