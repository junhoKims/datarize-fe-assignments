import { fetchWithTimeout } from '@/libs/fetchWithTimeout'
import type { DateRange, PurchaseFrequencyChartData } from '@/screens/home/types'
import qs from 'qs'

type NonNullableDateRange<T> = {
  [K in keyof T]: NonNullable<T[K]>
}

type GetPurchaseFrequencyRequest = NonNullableDateRange<DateRange>

export const getPurchaseFrequency = async (
  params?: GetPurchaseFrequencyRequest,
): Promise<PurchaseFrequencyChartData[]> => {
  const controller = new AbortController()
  const signal = controller.signal

  const fetchPromise = (async () => {
    const queryString = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })

    const res = await fetch(`/api/purchase-frequency${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal,
    })

    if (!res.ok) {
      throw new Error('Failed to fetch purchase frequency')
    }

    return res.json()
  })()

  return fetchWithTimeout(fetchPromise, controller)
}
