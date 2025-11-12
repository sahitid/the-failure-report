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
    <section className="px-6 py-6 bg-white border-b border-neutral-200">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-neutral-900 mb-1">The 10-Second Poll</h2>
          <p className="text-xs text-neutral-600">
            Quick pulse check: You&apos;re not alone in what you&apos;re feeling.
          </p>
        </div>

        {/* Poll Card */}
        <div className="bg-cream-50 border border-neutral-200">
          <div className="bg-soft-yellow-light p-4 border-b border-neutral-200">
            <h3 className="text-base font-semibold text-neutral-900">
              {pollQuestion}
            </h3>
          </div>

          <div className="p-4">
            {!voted ? (
              // Voting Options
              <div className="space-y-2">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleVote(option.id)}
                    className={`w-full text-left px-4 py-3 border transition-all duration-300 
                      ${selectedOption === option.id 
                        ? 'border-neutral-900 bg-neutral-50' 
                        : 'border-neutral-200 hover:border-neutral-400 bg-white'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-800">{option.text}</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                        ${selectedOption === option.id 
                          ? 'border-neutral-900 bg-neutral-900' 
                          : 'border-neutral-300'
                        }`}>
                        {selectedOption === option.id && (
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="space-y-3">
                <div className="bg-cream-100 border border-cream-300 p-3 mb-3">
                  <p className="text-xs text-neutral-700">✓ Your response has been recorded</p>
                </div>

                {options.map((option) => (
                  <div key={option.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-medium ${option.id === selectedOption ? 'text-neutral-900' : 'text-neutral-600'}`}>
                        {option.text}
                        {option.id === selectedOption && ' ✓'}
                      </span>
                      <span className="font-semibold text-neutral-900">{option.percentage}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2">
                      <div 
                        className={`${option.color} h-full transition-all duration-1000 ease-out`}
                        style={{ width: `${option.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}

                <div className="mt-4 pt-3 border-t border-neutral-200">
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    <span className="font-semibold text-neutral-900">78% of readers</span> have found club recruiting 
                    stressful. You&apos;re not alone in what you&apos;re feeling.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

