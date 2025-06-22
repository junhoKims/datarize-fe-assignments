import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { Loading } from '@/components/Loading'
import { QueryFetcher } from '@/components/QueryFetcher'
import { usePurchaseFrequencyBarChart } from '@/screens/home/PurchaseFrequencyChart/hooks/usePurchaseFrequencyBarChart'
import type { DateRange } from '@/screens/home/types'
import { Bar } from 'react-chartjs-2'

interface PurchaseFrequencyBarChartProps {
  dateRange: DateRange
}

export const PurchaseFrequencyBarChart = (props: PurchaseFrequencyBarChartProps) => {
  const { data, isLoading, isError, isSuccess, chartRef, createChartData, createChartOptions } =
    usePurchaseFrequencyBarChart(props)

  return (
    <QueryFetcher
      items={data}
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
      loadingFallback={<Loading />}
      errorFallback={<Error />}
      emptyFallback={<Empty name="구매 빈도" description="날짜를 변경해보세요" />}
    >
      {(items) => {
        const chartData = createChartData(items)
        const options = createChartOptions(items)
        return <Bar ref={chartRef} data={chartData} options={options} />
      }}
    </QueryFetcher>
  )
}
