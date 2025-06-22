import { getPurchaseFrequency } from '@/screens/home/apis/getPurchaseFrequency'
import type { DateRange, PurchaseFrequencyChartData } from '@/screens/home/types'
import { useQuery } from '@tanstack/react-query'
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'
import { useRef } from 'react'

Chart.register(...registerables)
const CHART_RENDER_DURATION = 500

interface UsePurchaseFrequencyBarChartProps {
  dateRange: DateRange
}

export const usePurchaseFrequencyBarChart = ({ dateRange }: UsePurchaseFrequencyBarChartProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['purchase-frequency', dateRange],
    queryFn: () => getPurchaseFrequency(convertDateRangeToDefaulted(dateRange)),
  })

  const chartRef = useRef<Chart<'bar'>>(null)

  const createChartData = (data: PurchaseFrequencyChartData[]): ChartData<'bar'> => {
    return {
      labels: data.map((item) => item.range),
      datasets: [
        {
          label: '구매 빈도',
          data: data.map((item) => item.count),
        },
      ],
    }
  }

  const createChartOptions = (data: PurchaseFrequencyChartData[]): ChartOptions<'bar'> => {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top',
        },
      },
      backgroundColor: '#f7ff9b',
      animation: {
        easing: 'easeInOutQuad',
        duration: CHART_RENDER_DURATION,
      },
      animations: {
        from: false,
        to: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          max: data.length - 1,
          ticks: {
            stepSize: 2,
          },
        },
        y: {
          border: {
            display: false,
          },
        },
      },
    } satisfies ChartOptions<'bar'>
  }

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    chartRef,
    createChartData,
    createChartOptions,
  }
}

const convertDateRangeToDefaulted = (dateRange: DateRange) => {
  const { from, to } = dateRange

  const isFromMissing = !from && to
  const isToMissing = from && !to

  if (isFromMissing) {
    return { from: to, to }
  }

  if (isToMissing) {
    return { from, to: from }
  }

  return { from: from!, to: to! }
}
