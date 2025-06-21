import { Purchase } from '../types'

type GetCustomerPurchaseResponse = Purchase[]

export const getCustomerPurchases = async (id: string): Promise<GetCustomerPurchaseResponse> => {
  const res = await fetch(`/api/customers/${id}/purchases`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch customer purchases')
  }
  return res.json()
}
