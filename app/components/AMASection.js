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

        {/* Q&A Item 1 */}
        <div className="bg-white border border-neutral-200 p-4 mb-3">
          <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">Engineering '27</div>
          <p className="text-sm font-semibold text-neutral-900 mb-3 leading-relaxed">
            &ldquo;How do you balance recruiting season with actually doing well in your classes?&rdquo;
          </p>
          <div className="border-l-2 border-cream-400 pl-3">
            <div className="text-xs text-neutral-500 mb-2">Wharton '25 (Now at Google)</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Nobody is doing both effortlessly. I picked 5 companies max, not 20. I also told my professors 
              what was happening—most were surprisingly understanding. One semester of B&apos;s won&apos;t ruin 
              your life.
            </p>
          </div>
        </div>

        {/* Q&A Item 2 */}
        <div className="bg-white border border-neutral-200 p-4 mb-3">
          <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">Wharton '28</div>
          <p className="text-sm font-semibold text-neutral-900 mb-3 leading-relaxed">
            &ldquo;Is it normal to feel like you don&apos;t belong here even after getting in?&rdquo;
          </p>
          <div className="border-l-2 border-cream-400 pl-3">
            <div className="text-xs text-neutral-500 mb-2">College '24 (Now at Med School)</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Imposter syndrome is basically the unofficial Penn welcome. I felt this way through most of 
              freshman year. What helped: realizing that admissions picked you for a reason, and that everyone 
              else is also Googling &ldquo;how to adult&rdquo; at 2am.
            </p>
          </div>
        </div>

        {/* Q&A Item 3 */}
        <div className="bg-white border border-neutral-200 p-4 mb-3">
          <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">Nursing '26</div>
          <p className="text-sm font-semibold text-neutral-900 mb-3 leading-relaxed">
            &ldquo;How do you deal with friends who only talk about their achievements?&rdquo;
          </p>
          <div className="border-l-2 border-cream-400 pl-3">
            <div className="text-xs text-neutral-500 mb-2">Engineering '25</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              I started being the person who shares struggles first. When someone asked how I was, I&apos;d say 
              &ldquo;honestly, stressed about my project.&rdquo; You&apos;d be surprised how many people open up 
              when you go first. Real friendships need vulnerability from both sides.
            </p>
          </div>
        </div>

        {/* Q&A Item 4 */}
        <div className="bg-white border border-neutral-200 p-4 mb-3">
          <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">Wharton '27</div>
          <p className="text-sm font-semibold text-neutral-900 mb-3 leading-relaxed">
            &ldquo;What if I&apos;m not sure I picked the right major anymore?&rdquo;
          </p>
          <div className="border-l-2 border-cream-400 pl-3">
            <div className="text-xs text-neutral-500 mb-2">College '23 (Switched Majors Twice)</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              I changed from Econ to Psychology to PPE. Each time felt like starting over, but looking back, 
              every class taught me something. You&apos;re allowed to change your mind. You&apos;re 20, not 40.
            </p>
          </div>
        </div>

        {/* Q&A Item 5 */}
        <div className="bg-white border border-neutral-200 p-4">
          <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">College '26</div>
          <p className="text-sm font-semibold text-neutral-900 mb-3 leading-relaxed">
            &ldquo;How do you know if you need professional help vs. just normal stress?&rdquo;
          </p>
          <div className="border-l-2 border-cream-400 pl-3">
            <div className="text-xs text-neutral-500 mb-2">Wharton '24 (CAPS Regular)</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              If you&apos;re asking the question, it&apos;s worth checking out. I waited too long thinking I could 
              &ldquo;handle it.&rdquo; CAPS isn&apos;t just for crises—it&apos;s for anyone who wants support. 
              Therapy isn&apos;t weakness; it&apos;s maintenance.
            </p>
          </div>
        </div>

        {/* Submit Question CTA */}
        <div className="mt-4 text-center">
          <button className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-6 py-2.5 rounded transition-colors duration-300">
            Ask Your Question
          </button>
        </div>
      </div>
    </section>
  )
}

