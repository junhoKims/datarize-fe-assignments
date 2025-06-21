import type { DateRange, PurchaseFrequencyChartData } from '@/screens/home/types'
import qs from 'qs'

type GetPurchaseFrequencyRequest = DateRange

export const getPurchaseFrequency = async (
  params?: GetPurchaseFrequencyRequest,
): Promise<PurchaseFrequencyChartData[]> => {
  const converted = { from: params?.from?.toISOString(), to: params?.to?.toISOString() }
  const queryString = qs.stringify(converted, { addQueryPrefix: true, skipNulls: true })

  const res = await fetch(`/api/purchase-frequency${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch purchase frequency')
  }

  return res.json()
}
