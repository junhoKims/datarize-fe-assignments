import { tn } from '../libs/tn'

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  title: string
}

export const Section = ({ title, className, children, ...props }: SectionProps) => {
  return (
    <section className={tn('rounded-lg border border-gray-200 bg-white', className)} {...props}>
      <div className="border-b border-gray-100 bg-gray-100 p-2 pr-3 pl-3 text-lg font-medium flex items-center gap-2">
        <span>{title}</span>
      </div>
      <div className="flex flex-col p-3">{children}</div>
    </section>
  )
}
