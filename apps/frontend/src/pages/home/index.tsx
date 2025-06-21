import { CustomerList } from '../../screens/home/CustomerList'
import { PurchaseFrequencyChart } from '../../screens/home/PurchaseFrequencyChart'

export const Home = () => {
  return (
    <main className="flex-1 pt-14 pb-20">
      <div className="flex flex-col gap-6 ">
        <PurchaseFrequencyChart />
        <CustomerList />
      </div>
    </main>
  )
}
