export default function SetbackSection() {
  return (
    <section className="px-6 py-10 bg-gradient-to-b from-white to-neutral-50 border-b-2 border-neutral-100">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-wharton-red/10 p-2 rounded-lg">
            <svg className="w-6 h-6 text-wharton-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-neutral-800">This Week&apos;s Setback</h2>
        </div>

        {/* Featured Story Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="bg-gradient-to-r from-wharton-red to-wharton-red-light p-4">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-semibold tracking-wide">ANONYMOUS SUBMISSION</span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">Wharton '26</span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-4 leading-tight">
              &ldquo;I Failed My First Midterm and Learned I&apos;m Not Special&rdquo;
            </h3>
            
            <div className="prose prose-sm text-neutral-700 leading-relaxed space-y-3">
              <p>
                I got my FNCE 100 midterm back last Tuesday. 43%. Not a typo. Forty-three percent. 
                I&apos;ve never failed anything in my life. I was valedictorian. I had a 1580 SAT. I got into Wharton.
              </p>
              <p>
                But here&apos;s the thing nobody tells you: high school achievement means absolutely nothing here. 
                Everyone was the smartest kid in their school. Everyone got perfect grades. Everyone had impressive 
                extracurriculars. We&apos;re all &ldquo;special&rdquo; which means none of us are.
              </p>
              <p>
                I spent three days in bed after getting that grade. I skipped my club meetings. I told my parents 
                I was &ldquo;busy with midterms&rdquo; when they called. I watched everyone else on Instagram posting 
                about their consulting internships and finance club acceptances, and I felt like I was drowning.
              </p>
              <p>
                Then I went to office hours. Turns out, the class average was 52%. I wasn&apos;t failing alone. 
                And my TA told me something that stuck: &ldquo;The grade measures what you know right now, not your 
                potential or worth.&rdquo; I&apos;m still processing that. I&apos;m still scared. But at least I&apos;m not 
                hiding anymore.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <span>2,847 readers resonated with this story</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button className="bg-wharton-red hover:bg-wharton-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 transform">
            Share Your Story for Next Week
          </button>
          <p className="text-xs text-neutral-500 mt-3">
            100% anonymous. 200 words max. No judgment. Just community.
          </p>
        </div>
      </div>
    </section>
  )
}

