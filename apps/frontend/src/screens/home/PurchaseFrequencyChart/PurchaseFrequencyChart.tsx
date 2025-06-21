import { Section } from '@/components/Section'
import { PurchaseFrequencyBarChart } from '@/screens/home/PurchaseFrequencyChart/PurchaseFrequencyBarChart'
import { PurchaseFrequencyFilter } from '@/screens/home/PurchaseFrequencyChart/PurchaseFrequencyFilter'
import { usePurchaseFrequencyChart } from '@/screens/home/PurchaseFrequencyChart/hooks/usePurchaseFrequencyChart'

export const PurchaseFrequencyChart = () => {
  const { dateRange, from, to, onChangeFrom, onChangeTo, onClickClearButton, onClickSearch } =
    usePurchaseFrequencyChart()

  return (
    <Section title="구매 빈도 차트">
      <PurchaseFrequencyFilter
        from={from}
        to={to}
        onChangeFrom={onChangeFrom}
        onChangeTo={onChangeTo}
        onClickClearButton={onClickClearButton}
        onClickSearch={onClickSearch}
      />
      <PurchaseFrequencyBarChart dateRange={dateRange} />
    </Section>
  )
}
