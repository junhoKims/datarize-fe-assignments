import type { Customer, SortBy } from '@/screens/home/types'
import qs from 'qs'

interface GetCustomersRequest {
  name?: string
  sortBy?: SortBy
}

type GetCustomersResponse = Customer[]

export const getCustomers = async (params?: GetCustomersRequest): Promise<GetCustomersResponse> => {
  const queryString = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })

  const res = await fetch(`/api/customers${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch customers')
  }

  return res.json()
}
