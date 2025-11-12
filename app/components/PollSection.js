'use client'

import { useState } from 'react'

export default function PollSection() {
  const [voted, setVoted] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const pollQuestion = "Have you felt overwhelmed by club recruitment this semester?"
  const options = [
    { id: 1, text: "Yes, extremely", percentage: 48, color: "bg-penn-red" },
    { id: 2, text: "Somewhat", percentage: 30, color: "bg-penn-blue" },
    { id: 3, text: "Not really", percentage: 15, color: "bg-neutral-400" },
    { id: 4, text: "I didn't recruit", percentage: 7, color: "bg-neutral-300" },
  ]

  const handleVote = (optionId) => {
    setSelectedOption(optionId)
    setTimeout(() => {
      setVoted(true)
    }, 300)
  }

  return (
    <section className="px-6 py-6 bg-neutral-800 border-b border-neutral-700">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white mb-1">The 10-Second Poll</h2>
          <p className="text-xs text-neutral-400">
            Quick pulse check: You&apos;re not alone in what you&apos;re feeling.
          </p>
        </div>

        {/* Poll Card */}
        <div className="bg-neutral-900 border border-neutral-700">
          <div className="bg-neutral-800 p-4 border-b border-neutral-700">
            <h3 className="text-base font-semibold text-white">
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
                        ? 'border-penn-red bg-penn-red/10' 
                        : 'border-neutral-700 hover:border-neutral-600 bg-neutral-800'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-200">{option.text}</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                        ${selectedOption === option.id 
                          ? 'border-penn-red bg-penn-red' 
                          : 'border-neutral-600'
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
                <div className="bg-neutral-800 border border-neutral-700 p-3 mb-3">
                  <p className="text-xs text-neutral-400">✓ Your response has been recorded</p>
                </div>

                {options.map((option) => (
                  <div key={option.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-medium ${option.id === selectedOption ? 'text-white' : 'text-neutral-400'}`}>
                        {option.text}
                        {option.id === selectedOption && ' ✓'}
                      </span>
                      <span className="font-semibold text-white">{option.percentage}%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2">
                      <div 
                        className={`${option.color} h-full transition-all duration-1000 ease-out`}
                        style={{ width: `${option.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}

                <div className="mt-4 pt-3 border-t border-neutral-700 space-y-2">
                  <p className="text-sm text-white font-semibold">
                    78% of readers felt overwhelmed by club applications too.
                  </p>
                  <p className="text-xs text-neutral-400">
                    You&apos;re not alone. <span className="font-semibold">234 students</span> have responded so far.
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

