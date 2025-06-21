interface FormatTextProps extends React.ComponentPropsWithoutRef<'span'> {
  /** 포맷하려는 타입 */
  type: 'price' | 'deliveryPrice' | 'count'
  /** 선행 문자 */
  prefix?: string
  /** 후행 문자 */
  suffix?: string
}

/**
 * `type`을 받아 children의 포맷을 변경시키는 함수
 *
 * 정의한 조건에 맞춰 Converting
 *
 * @example
 * <FormatText type="price" prefix="₩" suffix="원">1000</FormatText> // 1,000원
 * <FormatText type="deliveryPrice" prefix="₩" suffix="원">0</FormatText> // 무료
 */
export const FormatText = ({ type, prefix, suffix, className, children, ...props }: FormatTextProps) => {
  if (typeof children !== 'number') {
    throw new Error('children must be a number')
  }

  if (type === 'price') {
    return (
      <span className={className} {...props}>
        {prefix}
        {Number(children).toLocaleString()}
        {suffix}
      </span>
    )
  }

  if (type === 'deliveryPrice') {
    if (Number(children) === 0) {
      return (
        <span className={className} {...props}>
          무료
        </span>
      )
    }

    return (
      <span className={className} {...props}>
        {prefix}
        {Number(children).toLocaleString()}
        {suffix}
      </span>
    )
  }
  return (
    <span className={className} {...props}>
      {prefix}
      {children}
      {suffix}
    </span>
  )
}
