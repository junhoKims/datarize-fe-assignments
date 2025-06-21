import { PageLayout } from '@/components/PageLayout'
import { Customers } from '../../screens/home/Customers'
import { PurchaseFrequencyChart } from '../../screens/home/PurchaseFrequencyChart'

export const Home = () => {
  return (
    <PageLayout>
      <PurchaseFrequencyChart />
      <Customers />
    </PageLayout>
  )
}
