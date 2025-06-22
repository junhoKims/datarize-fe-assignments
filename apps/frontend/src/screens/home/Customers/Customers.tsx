import { Section } from '@/components/Section'
import { CustomerFilter } from '@/screens/home/Customers/CustomerFilter'
import { CustomersList } from '@/screens/home/Customers/CustomersList'
import { useCustomers } from '@/screens/home/Customers/hooks/useCustomers'

export const Customers = () => {
  const { name, sortBy, onClickSearch } = useCustomers()

  return (
    <Section title="구매 고객 목록">
      <CustomerFilter onClickSearch={onClickSearch} />
      <CustomersList name={name} sortBy={sortBy} />
    </Section>
  )
}
