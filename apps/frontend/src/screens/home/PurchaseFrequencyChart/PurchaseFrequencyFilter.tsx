import type { DateRange } from '@/screens/home/types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DEFAULT_FROM, DEFAULT_TO } from './hooks/usePurchaseFrequencyChart'

interface PurchaseFrequencyFilterProps {
  from: Date | null
  to: Date | null
  onChangeFrom: (date: Date | null) => void
  onChangeTo: (date: Date | null) => void
  onClickClearButton: () => void
  onClickSearch: (dateRange: DateRange) => void
}

export const PurchaseFrequencyFilter = ({
  from,
  to,
  onChangeFrom,
  onChangeTo,
  onClickClearButton,
  onClickSearch,
}: PurchaseFrequencyFilterProps) => {
  const handleClickSearch = () => {
    const dateRange: DateRange = { from, to }
    onClickSearch(dateRange)
  }

  return (
    <div className="flex space-x-4">
      <FilterDatePicker selected={from} onChange={onChangeFrom} />
      <FilterDatePicker selected={to} onChange={onChangeTo} />
      <button
        type="button"
        className="bg-white border border-blue-500 text-blue-500  p-2 rounded px-3 cursor-pointer"
        onClick={onClickClearButton}
      >
        초기화
      </button>
      <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded px-3 cursor-pointer"
        onClick={handleClickSearch}
      >
        검색
      </button>
    </div>
  )
}

interface FilterDatePickerProps {
  selected: Date | null
  onChange: (date: Date | null) => void
}

const FilterDatePicker = ({ selected, onChange }: FilterDatePickerProps) => {
  return (
    <div className="flex items-center border border-gray-200 rounded flex-1">
      <DatePicker
        selected={selected}
        onChange={onChange}
        wrapperClassName="w-full h-10"
        className="w-full h-10 p-2"
        minDate={new Date(DEFAULT_FROM)}
        maxDate={new Date(DEFAULT_TO)}
        dateFormat="yyyy-MM-dd"
        locale="ko"
      />
    </div>
  )
}
