"use client"

import type { Problem } from "@/lib/data"

interface ProblemTableProps {
  problems: Problem[]
  checkedProblems: boolean[]
  notes: string[]
  activeFilter: "all" | "completed" | "todo"
  onCheckboxChange: (index: number, checked: boolean) => void
  onNotesChange: (index: number, value: string) => void
}

export function ProblemTable({
  problems,
  checkedProblems,
  notes,
  activeFilter,
  onCheckboxChange,
  onNotesChange,
}: ProblemTableProps) {
  let currentDay = 0

  const shouldShowProblem = (index: number) => {
    const isChecked = checkedProblems[index]
    if (activeFilter === "all") return true
    if (activeFilter === "completed") return isChecked
    if (activeFilter === "todo") return !isChecked
    return true
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase sticky top-0 bg-gray-800 z-10">
            <tr>
              <th scope="col" className="px-4 py-3 w-12 text-center">
                Day
              </th>
              <th scope="col" className="px-6 py-3 min-w-[250px]">
                Problem
              </th>
              <th scope="col" className="px-6 py-3 min-w-[200px]">
                Topic
              </th>
              <th scope="col" className="px-6 py-3 min-w-[200px]">
                Notes / Time
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => {
              const showProblem = shouldShowProblem(index)
              const showDayHeader = problem.day !== currentDay

              if (showDayHeader) {
                currentDay = problem.day
              }

              return (
                <tr key={index} className={showProblem ? "" : "hidden"}>
                  {showDayHeader && showProblem && (
                    <tr className="bg-gray-700/50">
                      <td colSpan={5} className="px-6 py-2 font-semibold text-white">
                        📅 Day {currentDay}
                      </td>
                    </tr>
                  )}
                  <td className="px-4 py-4 text-center font-medium text-gray-300">{problem.day}</td>
                  <td className="px-6 py-4 font-medium text-white">
                    <a
                      href={problem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 hover:underline"
                    >
                      {problem.name}
                    </a>
                  </td>
                  <td className="px-6 py-4">{problem.topic}</td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-colors"
                      placeholder="Notes, time, etc."
                      value={notes[index] || ""}
                      onChange={(e) => onNotesChange(index, e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                      checked={checkedProblems[index] || false}
                      onChange={(e) => onCheckboxChange(index, e.target.checked)}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
