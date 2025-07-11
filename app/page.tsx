"use client"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import confetti from "canvas-confetti"
import { ProgressSummary } from "@/components/progress-summary"
import { FilterControls } from "@/components/filter-controls"
import { ProblemTable } from "@/components/problem-table"
import { problems, quotes } from "@/lib/data"

const inter = Inter({ subsets: ["latin"] })

export default function DSATracker() {
  const [checkedProblems, setCheckedProblems] = useState<boolean[]>(new Array(problems.length).fill(false))
  const [notes, setNotes] = useState<string[]>(new Array(problems.length).fill(""))
  const [activeFilter, setActiveFilter] = useState<"all" | "completed" | "todo">("all")
  const [motivationalQuote, setMotivationalQuote] = useState("")

  // Load state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("dsaTrackerState")
    if (savedState) {
      try {
        const state = JSON.parse(savedState)
        if (state.checkboxes) setCheckedProblems(state.checkboxes)
        if (state.notes) setNotes(state.notes)
        if (state.filter) setActiveFilter(state.filter)
      } catch (error) {
        console.error("Error loading saved state:", error)
      }
    }

    // Set random motivational quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setMotivationalQuote(randomQuote)
  }, [])

  // Save state to localStorage whenever state changes
  useEffect(() => {
    const state = {
      checkboxes: checkedProblems,
      notes: notes,
      filter: activeFilter,
    }
    localStorage.setItem("dsaTrackerState", JSON.stringify(state))
  }, [checkedProblems, notes, activeFilter])

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckedProblems = [...checkedProblems]
    newCheckedProblems[index] = checked
    setCheckedProblems(newCheckedProblems)

    if (checked) {
      // Fire confetti on check
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
      })

      // Check if the whole day is now complete
      const problemDay = problems[index].day
      const dayProblems = problems.filter((p) => p.day === problemDay)
      const dayIndices = problems
        .map((p, i) => ({ problem: p, index: i }))
        .filter(({ problem }) => problem.day === problemDay)
        .map(({ index }) => index)

      const allDayProblemsChecked = dayIndices.every((i) => (i === index ? true : newCheckedProblems[i]))

      if (allDayProblemsChecked) {
        // Day complete! Big confetti celebration
        setTimeout(() => {
          confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.6 },
          })
        }, 300)
      }
    }
  }

  const handleNotesChange = (index: number, value: string) => {
    const newNotes = [...notes]
    newNotes[index] = value
    setNotes(newNotes)
  }

  const solvedCount = checkedProblems.filter(Boolean).length
  const completionPercentage = (solvedCount / problems.length) * 100

  return (
    <div className={`min-h-screen bg-gray-900 text-gray-200 ${inter.className}`}>
      <div className="container mx-auto p-4 md:p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">10-Day DSA Mastery Plan</h1>
          <p className="text-gray-400 mt-2 italic">
            {motivationalQuote ? `"${motivationalQuote}"` : "Loading a motivational quote..."}
          </p>
        </header>

        {/* Progress Summary */}
        <ProgressSummary
          solvedCount={solvedCount}
          totalProblems={problems.length}
          completionPercentage={completionPercentage}
        />

        {/* Filter Controls */}
        <FilterControls activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Problem Table */}
        <ProblemTable
          problems={problems}
          checkedProblems={checkedProblems}
          notes={notes}
          activeFilter={activeFilter}
          onCheckboxChange={handleCheckboxChange}
          onNotesChange={handleNotesChange}
        />

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Tracker designed for maximum efficiency. Good luck!</p>
        </footer>
      </div>
    </div>
  )
}
