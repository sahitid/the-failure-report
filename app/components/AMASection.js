export default function AMASection() {
  return (
    <section className="px-6 py-10 bg-gradient-to-b from-neutral-50 to-rose-50/30 border-b-2 border-neutral-100">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-wharton-red-light/10 p-2 rounded-lg">
            <svg className="w-6 h-6 text-wharton-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-neutral-800">The Anonymous AMA</h2>
        </div>

        <p className="text-sm text-neutral-600 mb-6 italic">
          Real questions from Penn students. Real answers from those who&apos;ve been there.
        </p>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6 mb-6 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-neutral-100 rounded-full p-3">
              <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-wharton-red mb-2">QUESTION FROM ENGINEERING '27</div>
              <p className="text-base font-semibold text-neutral-900 leading-relaxed">
                &ldquo;How do you balance recruiting season with actually doing well in your classes? 
                I feel like I have to choose between my GPA and getting an internship, and everyone 
                else seems to be doing both effortlessly.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Answer Card */}
        <div className="bg-gradient-to-br from-wharton-red to-wharton-red-light rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-white/90 mb-3">ANSWER FROM WHARTON '25 (NOW AT GOOGLE)</div>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  First off: nobody is doing both effortlessly. That&apos;s Penn Face at its finest. I had a 
                  breakdown in Van Pelt during recruiting season sophomore year. You&apos;re seeing people&apos;s 
                  highlight reels, not their 3am panic attacks.
                </p>
                <p>
                  Here&apos;s what actually worked for me: I picked 5 companies max. Not 20. FIVE. I targeted them 
                  strategically, customized everything, and accepted that I&apos;d miss some &ldquo;opportunities.&rdquo; 
                  I also told my professors what was happening. Most were surprisingly understanding and helped me 
                  plan around interview dates.
                </p>
                <p>
                  The GPA vs. internship thing is real, but here&apos;s the truth: one semester of B&apos;s won&apos;t ruin your 
                  life. Neither will not getting an internship freshman or sophomore year. I didn&apos;t get my 
                  first &ldquo;impressive&rdquo; internship until junior year, and I&apos;m doing fine now.
                </p>
                <p className="font-semibold border-t border-white/30 pt-3 mt-3">
                  💡 Pro tip: Companies care way more about what you learned and how you grew than your 
                  perfect 4.0. Be strategic, be honest with yourself about your limits, and remember that 
                  recruiting happens every single year.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Question CTA */}
        <div className="mt-8 bg-white rounded-lg border-2 border-dashed border-neutral-300 p-6 text-center hover:border-wharton-red transition-colors duration-300">
          <h3 className="font-semibold text-neutral-900 mb-2">Have a question?</h3>
          <p className="text-sm text-neutral-600 mb-4">
            Submit anonymously and get answers from upperclassmen who&apos;ve navigated the same challenges.
          </p>
          <button className="bg-neutral-100 hover:bg-wharton-red hover:text-white text-neutral-700 font-medium px-6 py-3 rounded-lg transition-all duration-300">
            Ask Your Question
          </button>
        </div>
      </div>
    </section>
  )
}

