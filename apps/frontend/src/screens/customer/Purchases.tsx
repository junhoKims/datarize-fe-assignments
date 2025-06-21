import { FormatText } from '@/components/FormatText'
import { Section } from '@/components/Section'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getCustomerPurchases } from './apis/getCustomerPurchases'

interface PurchasesProps {
  id: string
}

export const Purchases = ({ id }: PurchasesProps) => {
  const { data } = useSuspenseQuery({
    queryKey: ['customerPurchases', id],
    queryFn: () => getCustomerPurchases(id),
  })

  return (
    <div className="flex flex-col gap-3 pt-3">
      {data.map((purchase, index) => (
        <Section key={index} title={`구매일자: ${purchase.date}`}>
          <ul>
            <li className="flex items-center gap-4">
              <img src={purchase.imgSrc} alt={purchase.product} className="w-16 h-16 object-cover rounded-xs" />
              <span className="flex-1">{purchase.product}</span>
              <FormatText type="price" suffix="원" className="text-blue-500">
                {purchase.price}
              </FormatText>
              <span>수량: {purchase.quantity}</span>
            </li>
          </ul>
        </Section>
      ))}
    </div>
  )
}
