import { FetcherProps2 } from '@/components/QueryFetcher2'
import type { DateRange } from '@/screens/home/types'
import { Bar } from 'react-chartjs-2'
import { usePurchaseFrequencyBarChart } from './hooks/usePurchaseFrequencyBarChart'

interface PurchaseFrequencyBarChartProps {
  dateRange: DateRange
}

export const PurchaseFrequencyBarChart = (props: PurchaseFrequencyBarChartProps) => {
  const { data, isPending, isError, isSuccess, chartRef, createChartData, createChartOptions } =
    usePurchaseFrequencyBarChart(props)

  return (
    <FetcherProps2
      items={data}
      isLoading={isPending}
      isError={isError}
      isSuccess={isSuccess}
      loadingUI={<div>Loading...</div>}
      errorUI={<div>Error</div>}
      emptyUI={<div>Empty</div>}
    >
      {(items) => {
        const chartData = createChartData(items)
        const options = createChartOptions(items)
        return <Bar ref={chartRef} data={chartData} options={options} />
      }}
    </FetcherProps2>
  )
}
