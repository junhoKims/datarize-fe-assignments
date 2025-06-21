const TIMEOUT_MS = 5000

const timeoutPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout'))
    }, TIMEOUT_MS)
  })
}

/**
 * timeout 추가한 fetch 함수
 */
export const fetchWithTimeout = async <T>(promise: Promise<T>, controller: AbortController): Promise<T> => {
  try {
    return (await Promise.race([promise, timeoutPromise()])) as T
  } catch (error) {
    if (error instanceof Error && error.message === 'Timeout') {
      controller.abort()
    }
    throw error
  }
}
