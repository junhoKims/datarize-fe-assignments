import { tv } from '@/libs/tv'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
  return (
    <button type="button" className={buttonVariants({ variant, className })} {...props}>
      {children}
    </button>
  )
}

const buttonVariants = tv({
  base: 'cursor-pointer rounded-sm p-2 px-3',
  variants: {
    variant: {
      primary: 'bg-amber-300 text-white hover:bg-amber-400',
      secondary: 'bg-white border border-amber-300 text-amber-300 hover:bg-amber-50',
      tertiary: 'bg-white border border-none text-gray-500',
    },
  },
})
