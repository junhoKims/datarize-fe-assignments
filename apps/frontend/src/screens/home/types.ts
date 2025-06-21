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
export type SortBy = 'asc' | 'desc' | undefined
