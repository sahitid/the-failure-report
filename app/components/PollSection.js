'use client'

import { useState } from 'react'

export default function PollSection() {
  const [voted, setVoted] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const pollQuestion = "Has club recruiting been stressful for you recently?"
  const options = [
    { id: 1, text: "Extremely stressful", percentage: 43, color: "bg-wharton-red" },
    { id: 2, text: "Somewhat stressful", percentage: 35, color: "bg-wharton-red-light" },
    { id: 3, text: "Not really stressful", percentage: 15, color: "bg-neutral-400" },
    { id: 4, text: "Not stressful at all", percentage: 7, color: "bg-neutral-300" },
  ]

  const handleVote = (optionId) => {
    setSelectedOption(optionId)
    setTimeout(() => {
      setVoted(true)
    }, 300)
  }

  return (
    <section className="px-6 py-10 bg-gradient-to-b from-rose-50/30 to-white border-b-2 border-neutral-100">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-wharton-red/10 p-2 rounded-lg">
            <svg className="w-6 h-6 text-wharton-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-neutral-800">The 10-Second Poll</h2>
        </div>

        <p className="text-sm text-neutral-600 mb-6">
          Quick pulse check: You&apos;re not alone in what you&apos;re feeling.
        </p>

        {/* Poll Card */}
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
          <div className="bg-gradient-to-r from-neutral-50 to-rose-50/50 p-6 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {pollQuestion}
            </h3>
            {!voted && (
              <p className="text-xs text-neutral-500">
                Click an option to see how other Penn students are feeling
              </p>
            )}
          </div>

          <div className="p-6">
            {!voted ? (
              // Voting Options
              <div className="space-y-3">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleVote(option.id)}
                    className={`w-full text-left px-5 py-4 rounded-lg border-2 transition-all duration-300 
                      ${selectedOption === option.id 
                        ? 'border-wharton-red bg-wharton-red/5 scale-105' 
                        : 'border-neutral-200 hover:border-wharton-red/50 hover:bg-neutral-50'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-neutral-800">{option.text}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                        ${selectedOption === option.id 
                          ? 'border-wharton-red bg-wharton-red' 
                          : 'border-neutral-300'
                        }`}>
                        {selectedOption === option.id && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              // Results View
              <div className="space-y-4">
                <div className="bg-wharton-red/10 border border-wharton-red/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-wharton-red font-semibold text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Your response has been recorded!</span>
                  </div>
                </div>

                {options.map((option) => (
                  <div key={option.id} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className={`font-medium ${option.id === selectedOption ? 'text-wharton-red' : 'text-neutral-700'}`}>
                        {option.text}
                        {option.id === selectedOption && ' ✓'}
                      </span>
                      <span className="font-bold text-neutral-900">{option.percentage}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`${option.color} h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                        style={{ width: `${option.percentage}%` }}
                      >
                        {option.percentage > 15 && (
                          <span className="text-white text-xs font-bold">{option.percentage}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <div className="bg-rose-50 rounded-lg p-4">
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      <span className="font-semibold text-wharton-red">78% of readers</span> have found club recruiting 
                      stressful. You&apos;re experiencing something that most of your peers are going through too—even 
                      if they don&apos;t show it. The struggle is real, shared, and nothing to be ashamed of.
                    </p>
                  </div>
                </div>

                <div className="text-center text-xs text-neutral-500 mt-4">
                  Based on 3,247 responses from Penn students
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

