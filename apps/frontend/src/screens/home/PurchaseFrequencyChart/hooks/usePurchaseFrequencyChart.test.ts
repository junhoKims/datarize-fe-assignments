import { usePurchaseFrequencyChart } from '@/screens/home/PurchaseFrequencyChart/hooks/usePurchaseFrequencyChart'
import { renderHook, waitFor } from '@testing-library/react'

const mockAlert = vi.fn()
global.alert = mockAlert

describe('usePurchaseFrequencyChart', () => {
  const EARLY_DATE = new Date('2024-07-01')
  const LATE_DATE = new Date('2024-07-02')

  afterEach(() => {
    mockAlert.mockClear()
  })

  it('onClickSearch 실행 시, from과 to가 모두 null이라면 alert 노출', async () => {
    const { result } = renderHook(() => usePurchaseFrequencyChart())

    result.current.onClickSearch({ from: null, to: null })
    expect(mockAlert).toHaveBeenCalledWith('날짜를 하나 이상 선택해주세요')
  })

  it('onClickSearch 실행 시, from 또는 to가 날짜 포맷이 잘못되었으면 alert 노출', async () => {
    const { result } = renderHook(() => usePurchaseFrequencyChart())

    result.current.onClickSearch({ from: EARLY_DATE, to: new Date('invalide Date') })
    expect(mockAlert).toHaveBeenCalledWith('날짜 포맷이 잘못되었습니다')
  })

  it('onClickSearch 실행 시, from보다 to가 더 이전 날짜거나 to가 from보다 이전 날짜라면 alert 노출', async () => {
    const { result } = renderHook(() => usePurchaseFrequencyChart())

    result.current.onClickSearch({ from: EARLY_DATE, to: LATE_DATE })

    waitFor(() => {
      expect(mockAlert).not.toHaveBeenCalled()
      expect(result.current.dateRange).toEqual({ from: EARLY_DATE, to: LATE_DATE })
    })

    result.current.onClickSearch({ from: LATE_DATE, to: EARLY_DATE })
    expect(mockAlert).toHaveBeenCalledWith('날짜 범위가 올바르지 않습니다')
  })
})
