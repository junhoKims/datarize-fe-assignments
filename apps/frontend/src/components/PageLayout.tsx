import { tn } from '@/libs/tn'

interface PageLayoutProps extends React.ComponentPropsWithoutRef<'main'> {
  children: React.ReactNode
}

export const PageLayout = ({ className, children, ...props }: PageLayoutProps) => {
  return (
    <main className={tn('flex-1 pt-14 pb-20', className)} {...props}>
      <div className="flex flex-col gap-6 pt-3">{children}</div>
    </main>
  )
}
