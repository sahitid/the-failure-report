export default function AMASection() {
  return (
    <section className="px-6 py-6 bg-cream-50 border-b border-neutral-200">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-neutral-900 mb-1">The Anonymous AMA</h2>
          <p className="text-xs text-neutral-600">
            Real questions. Real answers from those who&apos;ve been there.
          </p>
        </div>

        {/* Featured Q&A */}
        <div className="bg-white border-2 border-penn-blue/20 p-5 mb-4">
          <div className="text-xs font-medium text-penn-blue uppercase tracking-wide mb-3">Question from Wharton '26</div>
          <div className="bg-penn-blue/5 p-4 rounded mb-4">
            <p className="text-sm font-semibold text-neutral-900 leading-relaxed italic">
              &ldquo;What do you do when you realize you hate the career path you&apos;ve been working toward? I&apos;m a junior who&apos;s been recruiting for finance since freshman year, and I just got an internship offer... but the thought of actually doing it makes me miserable. I feel like I&apos;ve wasted three years and don&apos;t know what else I&apos;d even do.&rdquo;
            </p>
          </div>
          
          <div className="border-l-4 border-penn-red pl-4">
            <div className="text-xs text-penn-red font-semibold mb-3 uppercase tracking-wide">Response from Current Senior (Switched from Finance to Tech)</div>
            <div className="text-sm text-neutral-700 leading-relaxed space-y-3">
              <p>
                First—this realization is actually a gift, even if it doesn&apos;t feel like it. I know people who didn&apos;t figure this out until they were two years into their full-time job.
              </p>
              <p>
                Here&apos;s what I did: I gave myself permission to explore without completely burning bridges. I kept my finance internship offer as a backup while doing informational interviews in other industries. Talked to 15+ people in different fields. Turned out I loved product management, which actually used a lot of the analytical skills I&apos;d built.
              </p>
              <p>
                <span className="font-semibold">Practical steps:</span> (1) Identify what specifically you hate. Is it the hours? The work itself? The culture? This helps you know what to avoid. (2) Think about what you actually enjoy doing, even in non-career contexts. (3) Use winter break to do a mini-internship or project in something new. (4) Talk to Career Services—they&apos;re actually helpful for this.
              </p>
              <p>
                The &lsquo;wasted time&rsquo; thing is a myth. Those skills transfer. Your recruiting experience teaches you how to interview, network, and navigate professional environments. That&apos;s not nothing.
              </p>
              <p className="font-semibold text-neutral-900">
                You have time. I promise.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Question CTA */}
        <div className="mt-4 text-center">
          <button className="bg-penn-blue hover:bg-penn-blue/90 text-white text-sm font-medium px-6 py-2.5 rounded transition-colors duration-300">
            Submit Your Question
          </button>
        </div>
      </div>
    </section>
  )
}

