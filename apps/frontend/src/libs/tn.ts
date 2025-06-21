import type { ClassValue } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

/**
 * tailwind merge 기능이 포함된 className 합성 함수
 *
 * @example
 * tn('bg-red-500', 'bg-blue-500'); // 'bg-blue-500'
 * tn('bg-red-500', className);
 */
export const tn = (base: ClassValue, className?: string) => {
  return tv({ base })({ className })
}
