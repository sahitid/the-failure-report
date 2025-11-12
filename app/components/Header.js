export default function Header() {
  return (
    <header className="bg-gradient-to-br from-wharton-red to-wharton-red-light text-white">
      {/* Top Bar with Logo */}
      <div className="border-b border-white/20 py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Wharton Logo */}
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="#990000"/>
                <text x="50" y="55" fontSize="36" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="serif">W</text>
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-wider opacity-90">WHARTON WELLNESS</div>
              <div className="text-[10px] opacity-75">University of Pennsylvania</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs opacity-90">Issue #47</div>
            <div className="text-[10px] opacity-75">November 12, 2025</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-6 py-10 text-center">
        <div className="inline-block">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 animate-fade-in">
            The Failure Report
          </h1>
          <div className="h-1 bg-white/40 rounded-full mb-4 transform transition-all duration-500 hover:scale-105"></div>
        </div>
        <p className="text-xl md:text-2xl font-light tracking-wide opacity-95 mb-6">
          Your weekly anti-highlight reel
        </p>
        <div className="max-w-md mx-auto">
          <p className="text-sm leading-relaxed opacity-90 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
            Real stories from Penn students who are tired of pretending everything is perfect. 
            Because vulnerability is courage, and you&apos;re not alone in your struggles.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-6 py-6">
        <div className="max-w-lg mx-auto">
          <h2 className="text-sm font-semibold mb-2 tracking-wide">COMBATING PENN FACE, ONE STORY AT A TIME</h2>
          <p className="text-xs leading-relaxed opacity-90">
            Penn Face is the culture of appearing perfect while struggling in silence. This newsletter 
            creates a space where we can drop the facade and share the messy, real, and human parts of 
            our Penn experience. Every story is anonymous. Every struggle is valid. Every week, we grow stronger together.
          </p>
        </div>
      </div>
    </header>
  )
}

