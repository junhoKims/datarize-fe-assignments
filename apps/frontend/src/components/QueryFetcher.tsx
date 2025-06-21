interface QueryFetcherProps<T> {
  children: React.ReactNode
  isLoading: boolean
  loader: React.ReactNode
  isError: boolean
  error: React.ReactNode
  isSuccess: boolean
  items: T[] | undefined
}

export const QueryFetcher = <T,>({
  children,
  isLoading,
  loader,
  isError,
  error,
  isSuccess,
  items,
}: QueryFetcherProps<T>) => {
  if (isLoading) {
    return loader
  }

  if (isError) {
    return error
  }

  if (isSuccess && items && items.length === 0) {
    return <div>slefnesfln</div>
  }

  return <>{children}</>
}
