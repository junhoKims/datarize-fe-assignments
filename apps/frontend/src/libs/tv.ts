/**
 * 인자를 받아 설정된 tailwind classname을 머지 및 반환
 *
 * @example
 * tv({ base: 'bg-red-500', variants: { variant: { primary: 'bg-blue-500' } } })('primary') // 'bg-blue-500'
 * tv({ base: 'bg-red-500', variants: { variant: { primary: 'bg-blue-500' } } })('primary', 'bg-blue-500') // 'bg-blue-500'
 */
export { tv } from 'tailwind-variants'
