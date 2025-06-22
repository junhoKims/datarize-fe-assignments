import type { FallbackProps } from 'react-error-boundary'

interface ErrorProps extends Partial<FallbackProps> {}

/**
 * fetch Error 발생 시 노출하는 Error UI
 */
export const Error = ({ error, resetErrorBoundary }: ErrorProps) => {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="space-y-2 text-center">
        <p className="text-md font-semibold text-gray-800">문제가 발생했습니다</p>
        {error && <p className="text-sm text-gray-500">{error?.message}</p>}
        {resetErrorBoundary && (
          <button
            type="button"
            onClick={resetErrorBoundary}
            className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
          >
            다시 시도
          </button>
        )}
      </div>
    </div>
  )
}
