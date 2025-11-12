import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-soft-yellow border-b border-neutral-200">
      {/* Compact Top Bar with Real Wharton Logo */}
      <div className="px-6 py-3 border-b border-neutral-200/50 bg-cream-50">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-32">
              <Image 
                src="/wharton-logo.png" 
                alt="Wharton Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-600 font-medium">Wellness Initiative</span>
          </div>
          <div className="text-neutral-500">
            Issue #47 • Nov 12, 2025
          </div>
        </div>
      </div>

      {/* Main Header - Compact */}
      <div className="px-6 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-neutral-900">
          The Failure Report
        </h1>
        <p className="text-base text-neutral-600 mb-3">
          Your weekly anti-highlight reel
        </p>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
          Real stories from Penn students who are tired of pretending everything is perfect.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-64 overflow-hidden border-t border-neutral-200">
        <Image 
          src="/hero-statue.jpg" 
          alt="Contemplative statue representing vulnerability"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-sm font-medium italic max-w-lg">
            &ldquo;It&apos;s okay to not be okay. Behind every perfect facade is a real person with real struggles.&rdquo;
          </p>
        </div>
      </div>
    </header>
  )
}

