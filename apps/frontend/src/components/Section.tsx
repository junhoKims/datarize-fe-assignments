import { tn } from '@/libs/tn'

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  title: string
}

/**
 * Section UI
 */
export const Section = ({ title, className, children, ...props }: SectionProps) => {
  return (
    <section className={tn('rounded-lg bg-white shadow-xs', className)} {...props}>
      <div className="border border-gray-200 rounded-t-md bg-gray-200 p-2 pr-3 pl-3 flex items-center gap-2">
        <span className="text-gray-800 font-medium text-md">{title}</span>
      </div>
      <div className="flex flex-col p-3 gap-3 border-b border-x border-gray-200 rounded-b-md">{children}</div>
    </section>
  )
}
