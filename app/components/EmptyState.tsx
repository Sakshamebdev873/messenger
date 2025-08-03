import React from 'react'

const EmptyState = () => {
  return (
    <div className="flex min-h-full items-center justify-center bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        {/* Optional Icon */}
        <div className="mb-4 rounded-full bg-gray-200 p-3">
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h3 className="mt-2 text-lg font-semibold text-gray-900 sm:text-2xl">
          Select a chat or start a conversation
        </h3>

        {/* Optional Subtext */}
        <p className="mt-1 text-sm text-gray-500">
          Choose someone from your contacts or create a new message.
        </p>
      </div>
    </div>
  )
}

export default EmptyState
