import type { SortBy } from '@/screens/home/types'
import { useRef } from 'react'

interface CustomersFilterProps {
  onClickSearch: (name: string, sortBy: SortBy) => void
}

export const useCustomersFilter = ({ onClickSearch }: CustomersFilterProps) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const sortByRef = useRef<HTMLSelectElement>(null)

  const handleClickSearch = () => {
    const name = nameRef.current?.value || ''
    const sortBy = (sortByRef.current?.value || '') as SortBy
    onClickSearch(name, sortBy)
  }

  const onClickXButton = () => {
    if (nameRef.current) {
      nameRef.current.value = ''
    }
  }

  const onClickClearButton = () => {
    if (nameRef.current) {
      nameRef.current.value = ''
    }

    if (sortByRef.current) {
      sortByRef.current.value = ''
    }

    handleClickSearch()
  }

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.nativeEvent.isComposing || e.code === 'Unidentified') {
      return
    }

    if (e.key === 'Enter') {
      handleClickSearch()
    }
  }

  return {
    nameRef,
    sortByRef,
    onKeyDown,
    onClickClearButton,
    onClickXButton,
    onClickSearch: handleClickSearch,
  }
}
