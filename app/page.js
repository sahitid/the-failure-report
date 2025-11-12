'use client'

import { useState } from 'react'
import Header from './components/Header'
import SetbackSection from './components/SetbackSection'
import AMASection from './components/AMASection'
import PollSection from './components/PollSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-800 py-8 px-4">
      {/* Email Container - mimics email client max-width */}
      <div className="email-container bg-neutral-900 shadow-2xl border border-neutral-700">
        <Header />
        <SetbackSection />
        <AMASection />
        <PollSection />
        <Footer />
      </div>
    </main>
  )
}

