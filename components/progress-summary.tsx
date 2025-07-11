interface ProgressSummaryProps {
  solvedCount: number
  totalProblems: number
  completionPercentage: number
}

export function ProgressSummary({ solvedCount, totalProblems, completionPercentage }: ProgressSummaryProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Progress Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-gray-400">Problems Solved</p>
          <p className="text-3xl font-bold text-white">
            {solvedCount} / {totalProblems}
          </p>
        </div>
        <div>
          <p className="text-gray-400">Completion</p>
          <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-right text-sm font-medium mt-1">{completionPercentage.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  )
}
