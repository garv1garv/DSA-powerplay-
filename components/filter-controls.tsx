"use client"

interface FilterControlsProps {
  activeFilter: "all" | "completed" | "todo"
  onFilterChange: (filter: "all" | "completed" | "todo") => void
}

export function FilterControls({ activeFilter, onFilterChange }: FilterControlsProps) {
  const filters = [
    { key: "all" as const, label: "All" },
    { key: "completed" as const, label: "Completed" },
    { key: "todo" as const, label: "To-Do" },
  ]

  return (
    <div className="mb-4 flex justify-center space-x-2">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`font-bold py-2 px-4 rounded-lg transition-colors duration-200 ${
            activeFilter === key ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
