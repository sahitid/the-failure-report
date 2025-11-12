export default function SetbackSection() {
  return (
    <section className="px-6 py-6 bg-white border-b border-neutral-200">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-neutral-900">This Week&apos;s Setback</h2>
        </div>

        {/* Featured Story Card */}
        <div className="bg-cream-50 border border-neutral-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Anonymous</span>
            <span className="text-xs text-neutral-500">Wharton '26</span>
          </div>
          
          <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-tight">
            &ldquo;I Failed My First Midterm and Learned I&apos;m Not Special&rdquo;
          </h3>
          
          <div className="text-sm text-neutral-700 leading-relaxed space-y-2">
            <p>
              I got my FNCE 100 midterm back last Tuesday. 43%. Not a typo. I&apos;ve never failed anything in my life. 
              I was valedictorian. I had a 1580 SAT. I got into Wharton.
            </p>
            <p>
              But here&apos;s the thing nobody tells you: high school achievement means absolutely nothing here. 
              Everyone was the smartest kid in their school. We&apos;re all &ldquo;special&rdquo; which means none of us are.
            </p>
            <p>
              I spent three days in bed after getting that grade. Then I went to office hours. Turns out, 
              the class average was 52%. I wasn&apos;t failing alone. My TA told me: &ldquo;The grade measures 
              what you know right now, not your potential or worth.&rdquo;
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4 text-center">
          <button className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-6 py-2.5 rounded transition-colors duration-300">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  )
}

