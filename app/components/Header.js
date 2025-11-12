import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-neutral-900 border-b border-neutral-700">
      {/* Compact Top Bar with Real Wharton Logo */}
      <div className="px-6 py-3 border-b border-neutral-700 bg-neutral-800">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-32 opacity-90">
              <Image 
                src="/wharton-logo.png" 
                alt="Wharton Logo"
                fill
                sizes="128px"
                style={{ objectFit: 'contain' }}
                priority
                quality={100}
              />
            </div>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400 font-medium">Wellness Initiative</span>
          </div>
          <div className="text-neutral-500">
            Issue #47 • Nov 12, 2025
          </div>
        </div>
      </div>

      {/* Main Header - Compact */}
      <div className="px-6 py-6 text-center bg-gradient-to-b from-neutral-900 to-neutral-800">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
          The Failure Report
        </h1>
        <p className="text-base text-neutral-300 mb-3">
          Your weekly anti-highlight reel
        </p>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
          Real stories from Penn students who are tired of pretending everything is perfect.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-64 overflow-hidden border-t border-neutral-700 bg-neutral-900">
        <Image 
          src="/hero-statue.png" 
          alt="Contemplative statue representing vulnerability"
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm font-medium text-white/90 max-w-lg border-l-4 border-penn-red pl-4">
            &ldquo;It&apos;s okay to not be okay. Behind every perfect facade is a real person with real struggles.&rdquo;
          </p>
        </div>
      </div>
    </header>
  )
}

