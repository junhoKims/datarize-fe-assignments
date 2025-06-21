interface FetcherProps2Props<T> {
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  loadingUI: React.ReactNode
  errorUI: React.ReactNode
  emptyUI: React.ReactNode
  items: T[] | undefined
  children: (data: Required<T>[]) => React.ReactNode
}

export const FetcherProps2 = <T,>({
  isLoading,
  isError,
  isSuccess,
  loadingUI,
  errorUI,
  emptyUI,
  items,
  children,
}: FetcherProps2Props<T>) => {
  if (isLoading) {
    return loadingUI
  }

  if (isError) {
    return errorUI
  }

  if (isSuccess && items && items.length === 0) {
    return emptyUI
  }

  return children(items as Required<T>[])
}
