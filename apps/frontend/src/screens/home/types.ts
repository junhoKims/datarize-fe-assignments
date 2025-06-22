/**
 * 고객 타입
 */
export type Customer = {
  /** 고객 id */
  id: number
  /** 고객 이름 */
  name: string
  /** 총 구매 횟수 */
  count: number
  /** 총 구매 금액 */
  totalAmount: number
}

/**
 * 고객 목록 정렬 타입
 */
export type SortBy = 'asc' | 'desc' | ''

/**
 * 구매빈도 차트 타입
 */
export type PurchaseFrequencyChartData = {
  /** 구매빈도 범위 */
  range: string
  /** 구매빈도 개수 */
  count: number
}

export type DateRange = {
  from: Date | null
  to: Date | null
}
