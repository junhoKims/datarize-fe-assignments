/**
 * 구매내역 타입
 */
export type Purchase = {
  /** 날짜 */
  date: string
  /** 이미지 주소 */
  imgSrc: string
  /** 가격 */
  price: number
  /** 상품명 */
  product: string
  /** 수량 */
  quantity: number
}
