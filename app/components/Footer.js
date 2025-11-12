export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      {/* Partnership Section */}
      <div className="px-6 py-5 border-t border-neutral-700">
        <div className="max-w-xl mx-auto">
          <div className="bg-neutral-800 border border-neutral-700 p-4">
            <h3 className="text-sm font-semibold text-white mb-2">In Partnership with Wharton Wellness</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              This newsletter is created in collaboration with Wharton&apos;s Student Wellness team to 
              provide a safe, supportive space for authentic student voices.
            </p>
          </div>
        </div>
      </div>

      {/* Anonymity & Support Section */}
      <div className="px-6 py-5 bg-neutral-800 border-t border-neutral-700">
        <div className="max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold text-white mb-2 uppercase tracking-wide">Your Privacy</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All submissions are completely anonymous. We never collect identifying information.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white mb-2 uppercase tracking-wide">Need Support?</h4>
              <ul className="text-xs text-neutral-400 space-y-1">
                <li>CAPS: 215-898-7021</li>
                <li>Student Health: 215-746-3535</li>
                <li>Crisis Line (24/7): 215-898-7021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Footer */}
      <div className="px-6 py-5 bg-neutral-900 border-t border-neutral-700">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs text-neutral-400 mb-2">
            <a href="mailto:thefailurereport@wharton.upenn.edu" className="text-neutral-300 hover:text-white hover:underline font-medium transition-colors">
              thefailurereport@wharton.upenn.edu
            </a>
          </p>
          
          <div className="flex items-center justify-center gap-3 text-xs text-neutral-500 mb-4">
            <a href="#" className="hover:text-neutral-300 transition-colors">Preferences</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Unsubscribe</a>
          </div>

          <p className="text-xs text-neutral-600">
            © 2025 The Failure Report • Wharton School, University of Pennsylvania
          </p>
        </div>
      </div>
    </footer>
  )
}

