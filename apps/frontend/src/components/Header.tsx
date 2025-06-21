interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-1/2 z-50 flex justify-center h-14 w-full max-w-[768px] -translate-x-1/2 items-center border-b border-gray-100 bg-white ">
      <h1>{title}</h1>
    </header>
  )
}
