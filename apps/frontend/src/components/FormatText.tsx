interface FormatTextProps extends React.ComponentPropsWithoutRef<'span'> {
  /** 포맷하려는 타입 */
  type: 'price' | 'count'
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
 */
export const FormatText = ({ type, prefix, suffix, className, children, ...props }: FormatTextProps) => {
  if (typeof Number(children) !== 'number') {
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

  return (
    <span className={className} {...props}>
      {prefix}
      {children}
      {suffix}
    </span>
  )
}
