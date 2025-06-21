import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="grid min-h-screen w-full grid-rows-[0px_1fr_0px] justify-items-center">
        <div className="relative row-start-2 w-full max-w-[768px] flex flex-col">
          <header className="fixed top-0 left-1/2 z-50 flex justify-center h-14 w-full max-w-[768px] -translate-x-1/2 items-center border-b border-gray-100 bg-white ">
            <h1>대시보드 애플리케이션</h1>
          </header>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
