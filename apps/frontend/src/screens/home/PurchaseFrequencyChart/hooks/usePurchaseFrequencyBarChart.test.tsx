import { usePurchaseFrequencyBarChart } from '@/screens/home/PurchaseFrequencyChart/hooks/usePurchaseFrequencyBarChart'
import { DEFAULT_FROM, DEFAULT_TO } from '@/screens/home/PurchaseFrequencyChart/hooks/usePurchaseFrequencyChart'
import type { PurchaseFrequencyChartData } from '@/screens/home/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'

describe('usePurchaseFrequencyBarChart', () => {
  const MOCK_RESPONSE_DATA: PurchaseFrequencyChartData[] = [{ range: '20001 - 30000', count: 5 }]

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('"from"이나 "to" 중 하나가 null일 경우, null인 값을 다른 값으로 대체하여 API를 호출', async () => {
    const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue(createFetchResponse(MOCK_RESPONSE_DATA))

    const props1 = { dateRange: { from: DEFAULT_FROM, to: null } }
    renderHook(() => usePurchaseFrequencyBarChart(props1), { wrapper })

    expect(fetchMock.mock.calls[0][0]).toContain('from=2024-07-01')
    expect(fetchMock.mock.calls[0][0]).toContain('to=2024-07-01')

    const props2 = { dateRange: { from: null, to: DEFAULT_TO } }
    renderHook(() => usePurchaseFrequencyBarChart(props2), { wrapper })

    expect(fetchMock.mock.calls[1][0]).toContain('from=2024-07-31')
    expect(fetchMock.mock.calls[1][0]).toContain('to=2024-07-31')
  })
})

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createFetchResponse(data: any[]) {
  return { ok: true, status: 200, json: () => new Promise((resolve) => resolve(data)) } as Response
}
