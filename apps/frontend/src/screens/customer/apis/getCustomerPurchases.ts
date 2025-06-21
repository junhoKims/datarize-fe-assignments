import { fetchWithTimeout } from '@/libs/fetchWithTimeout'
import type { Purchase } from '@/screens/customer/types'

export const getCustomerPurchases = async (id: string): Promise<Purchase[]> => {
  const controller = new AbortController()
  const signal = controller.signal

  const fetchPromise = (async () => {
    const res = await fetch(`/api/customers/${id}/purchases`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal,
    })

    if (!res.ok) {
      throw new Error('Failed to fetch customer purchases')
    }
    return res.json()
  })()

  return fetchWithTimeout(fetchPromise, controller)
}
