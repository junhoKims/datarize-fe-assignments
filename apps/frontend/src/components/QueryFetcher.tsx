interface QueryFetcherProps<T> {
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  loadingFallback: React.ReactNode
  errorFallback: React.ReactNode
  emptyFallback: React.ReactNode
  items: T[] | undefined
  children: (data: Required<T>[]) => React.ReactNode
}

/**
 * Query API를 받아 로딩, 에러, 빈데이터에 대한 선언적 처리를 구현하는 UI
 */
export const QueryFetcher = <T,>({
  isLoading,
  isError,
  isSuccess,
  loadingFallback,
  errorFallback,
  emptyFallback,
  items,
  children,
}: QueryFetcherProps<T>) => {
  if (isLoading) {
    return loadingFallback
  }

  if (isError) {
    return errorFallback
  }

  if (isSuccess && items && items.length === 0) {
    return emptyFallback
  }

  return children(items as Required<T>[])
}
