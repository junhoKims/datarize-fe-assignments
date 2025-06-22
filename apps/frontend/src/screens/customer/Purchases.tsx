import { Empty } from '@/components/Empty'
import { FormatText } from '@/components/FormatText'
import { Section } from '@/components/Section'
import { getCustomerPurchases } from '@/screens/customer/apis/getCustomerPurchases'
import { useSuspenseQuery } from '@tanstack/react-query'

interface PurchasesProps {
  id: string
}

export const Purchases = ({ id }: PurchasesProps) => {
  const { data } = useSuspenseQuery({
    queryKey: ['customerPurchases', id],
    queryFn: () => getCustomerPurchases(id),
  })

  if (data.length === 0) {
    return <Empty name="구매 내역" description="죄송합니다" />
  }

  return (
    <>
      {data.map((purchase, index) => (
        <Section key={index} title={`${purchase.date}`}>
          <ul>
            <li className="flex items-center gap-4">
              <img src={purchase.imgSrc} alt={purchase.product} className="w-16 h-16 object-cover rounded-sm" />
              <span className="flex-1">{purchase.product}</span>
              <FormatText type="price" suffix="원" className="text-gray-600">
                {purchase.price}
              </FormatText>
              <span>수량: {purchase.quantity}</span>
            </li>
          </ul>
        </Section>
      ))}
    </>
  )
}
