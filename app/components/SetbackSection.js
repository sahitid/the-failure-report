export default function SetbackSection() {
  return (
    <section className="px-6 py-6 bg-white border-b border-neutral-300">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-xl font-display font-bold text-neutral-900">This Week&apos;s Setback</h2>
        </div>

        {/* Featured Story Card */}
        <div className="bg-neutral-50 border-l-4 border-penn-red p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">Anonymous</span>
            <span className="text-xs text-neutral-600 font-medium">Wharton '25</span>
          </div>
          
          <h3 className="text-lg font-serif font-bold text-neutral-900 mb-3 leading-tight">
            &ldquo;I Blanked in My Dream Interview&rdquo;
          </h3>
          
          <div className="text-sm text-neutral-700 leading-relaxed space-y-2">
            <p>
              I spent all of fall semester preparing for consulting recruitment. I networked, did case prep, joined a consulting club. Last week, I had my first-round interview with my dream firm—and I completely blanked on the market sizing question. Like, entirely forgot how to do basic math. I stumbled through the rest of the interview knowing I&apos;d already lost it.
            </p>
            <p>
              The rejection email came two days later. The worst part? Seeing everyone else post their second-round interview invites on LinkedIn while I sat in Huntsman alone, wondering if I&apos;m even cut out for this. I know logically that one interview doesn&apos;t define me, but it feels like I wasted an entire semester working toward something I failed at in 30 minutes.
            </p>
            <p>
              What helped: Talking to a friend who reminded me that most consultants fail multiple interviews before landing offers. Also, my interviewer&apos;s feedback actually gave me concrete things to work on. I&apos;m trying to see this as practice, not a verdict on my worth.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4 text-center">
          <button className="bg-penn-red hover:bg-penn-red/90 text-white text-sm font-medium px-6 py-2.5 rounded transition-colors duration-300">
            Share Your Setback for Next Week
          </button>
        </div>
      </div>
    </section>
  )
}

