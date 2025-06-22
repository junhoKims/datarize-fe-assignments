import { fetchWithTimeout } from '@/libs/fetchWithTimeout'
import type { Customer, SortBy } from '@/screens/home/types'
import qs from 'qs'

interface GetCustomersRequest {
  name?: string
  sortBy?: SortBy
}

export const getCustomers = async (params?: GetCustomersRequest): Promise<Customer[]> => {
  const controller = new AbortController()
  const signal = controller.signal

  const fetchPromise = (async () => {
    const queryString = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })
    const res = await fetch(`/api/customers${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal,
    })

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('검색 결과가 없습니다')
      } else {
        throw new Error('Failed to fetch customers')
      }
    }

    return res.json()
  })()

  return fetchWithTimeout(fetchPromise, controller)
}
