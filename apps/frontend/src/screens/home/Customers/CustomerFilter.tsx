import { useCustomersFilter } from '@/screens/home/Customers/hooks/useCustomersFilter'
import type { SortBy } from '@/screens/home/types'

interface CustomerFilterProps {
  onClickSearch: (name: string, sortBy: SortBy) => void
}

export const CustomerFilter = (props: CustomerFilterProps) => {
  const { nameRef, sortByRef, onKeyDown, onClickSearch, onClickXButton } = useCustomersFilter(props)

  return (
    <div className="flex space-x-4">
      <div className="flex items-center border border-gray-200 rounded flex-1">
        <input
          ref={nameRef}
          type="text"
          placeholder="이름을 입력해주세요"
          className="p-2 flex-1"
          onKeyDown={onKeyDown}
        />
        <button type="button" className="text-gray-500 hover:text-gray-700 p-2 cursor-pointer" onClick={onClickXButton}>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 8.586l-4-4a1 1 0 00-1.414 1.414l4 4-4 4a1 1 0 001.414 1.414l4-4 4 4a1 1 0 001.414-1.414l-4-4 4-4a1 1 0 00-1.414-1.414l-4 4z" />
          </svg>
        </button>
      </div>
      <div className="relative">
        <select ref={sortByRef} className="border border-gray-200 p-2 rounded appearance-none pr-8">
          <option value="">기본</option>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      <button type="button" className="bg-blue-500 text-white p-2 rounded px-3 cursor-pointer" onClick={onClickSearch}>
        검색
      </button>
    </div>
  )
}
