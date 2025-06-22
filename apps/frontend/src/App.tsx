import { Header } from '@/components/Header'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="grid min-h-screen w-full grid-rows-[0px_1fr_0px] justify-items-center">
        <div className="relative row-start-2 w-full max-w-[768px] flex flex-col">
          <Header title="7월 고객 분석 대시보드" />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
