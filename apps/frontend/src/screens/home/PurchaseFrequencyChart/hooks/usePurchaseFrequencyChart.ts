import type { DateRange } from '@/screens/home/types'
import { useState } from 'react'

export const DEFAULT_FROM = new Date('2024-07-01')
export const DEFAULT_TO = new Date('2024-07-31')
const DEFAULT_DATE_RANGE: DateRange = { from: DEFAULT_FROM, to: DEFAULT_TO }

export const usePurchaseFrequencyChart = () => {
  const [dateRange, setDateRange] = useState<DateRange>(DEFAULT_DATE_RANGE)

  const [from, setFrom] = useState<Date | null>(DEFAULT_FROM)
  const [to, setTo] = useState<Date | null>(DEFAULT_TO)

  const onChangeFrom = (date: Date | null) => {
    setFrom(date)
  }

  const onChangeTo = (date: Date | null) => {
    setTo(date)
  }

  const onClickClearButton = () => {
    setFrom(DEFAULT_FROM)
    setTo(DEFAULT_TO)
    setDateRange(DEFAULT_DATE_RANGE)
  }

  const onClickSearch = (dateRange: DateRange) => {
    const { from, to } = dateRange

    if (!from && !to) {
      alert('날짜를 하나 이상 선택해주세요')
      return
    }

    if (from && to) {
      if (isNaN(from.getTime()) || isNaN(to.getTime())) {
        alert('날짜 포맷이 잘못되었습니다')
        return
      }

      if ((from && to && from > to) || (to && from && to < from)) {
        alert('날짜 범위가 올바르지 않습니다')
        return
      }
    }

    setDateRange(dateRange)
  }

  return {
    dateRange,
    from,
    to,
    onChangeFrom,
    onChangeTo,
    onClickClearButton,
    onClickSearch,
  }
}
