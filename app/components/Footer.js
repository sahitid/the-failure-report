export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-neutral-50">
      {/* Partnership Section */}
      <div className="px-6 py-8 border-t-2 border-neutral-200">
        <div className="max-w-xl mx-auto">
          <div className="bg-gradient-to-r from-wharton-red/5 to-rose-50 rounded-xl border border-wharton-red/20 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-wharton-red/10 rounded-lg p-3">
                <svg className="w-6 h-6 text-wharton-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">In Partnership with Wharton Wellness</h3>
                <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                  This newsletter is created in collaboration with Wharton&apos;s Student Wellness team to 
                  provide a safe, supportive space for authentic student voices.
                </p>
                <a href="#" className="text-sm text-wharton-red hover:text-wharton-red-dark font-medium inline-flex items-center gap-1 transition-colors">
                  Learn more about Wharton Wellness
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anonymity & Support Section */}
      <div className="px-6 py-8 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-wharton-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Your Privacy Matters
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                All submissions are completely anonymous. We use encrypted forms and never collect identifying 
                information. Your story is safe with us.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-wharton-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Need Support?
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                If you&apos;re struggling, you don&apos;t have to face it alone.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Counseling & Psychological Services: 215-898-7021</li>
                <li>• Student Health Service: 215-746-3535</li>
                <li>• Crisis Line (24/7): 215-898-7021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Contact */}
      <div className="px-6 py-8 bg-white border-t border-neutral-200">
        <div className="max-w-xl mx-auto text-center">
          <h4 className="font-semibold text-neutral-900 mb-4">Stay Connected</h4>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a href="#" className="bg-neutral-100 hover:bg-wharton-red hover:text-white text-neutral-600 p-3 rounded-full transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="bg-neutral-100 hover:bg-wharton-red hover:text-white text-neutral-600 p-3 rounded-full transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="bg-neutral-100 hover:bg-wharton-red hover:text-white text-neutral-600 p-3 rounded-full transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Email Contact */}
          <div className="mb-6">
            <p className="text-sm text-neutral-600 mb-2">Have feedback or want to contribute?</p>
            <a href="mailto:thefailurereport@wharton.upenn.edu" className="text-wharton-red hover:text-wharton-red-dark font-medium text-sm">
              thefailurereport@wharton.upenn.edu
            </a>
          </div>

          {/* Unsubscribe & Preferences */}
          <div className="border-t border-neutral-200 pt-6">
            <p className="text-xs text-neutral-500 mb-3">
              You&apos;re receiving this because you subscribed to The Failure Report.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs">
              <a href="#" className="text-neutral-600 hover:text-wharton-red transition-colors">
                Update Preferences
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#" className="text-neutral-600 hover:text-wharton-red transition-colors">
                Unsubscribe
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <p className="text-xs text-neutral-500">
              © 2025 The Failure Report • Wharton School, University of Pennsylvania
            </p>
            <p className="text-xs text-neutral-400 mt-2">
              Made with vulnerability and courage by Penn students, for Penn students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

