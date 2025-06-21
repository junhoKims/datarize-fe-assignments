import type { SortBy } from '@/screens/home/types'
import { useQueryClient } from '@tanstack/react-query'
import { useRef } from 'react'

interface CustomersFilterProps {
  onClickSearch: (name: string, sortBy: SortBy) => void
}

export const useCustomersFilter = ({ onClickSearch }: CustomersFilterProps) => {
  const queryClient = useQueryClient()
  const nameRef = useRef<HTMLInputElement>(null)
  const sortByRef = useRef<HTMLSelectElement>(null)

  const handleClickSearch = () => {
    queryClient.resetQueries({ queryKey: ['dashboard', 'customers'] })
    const name = nameRef.current?.value || ''
    const sortBy = sortByRef.current?.value as SortBy
    onClickSearch(name, sortBy)
  }

  const handleClickXButton = () => {
    if (nameRef.current) {
      nameRef.current.value = ''
    }
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
    onClickSearch: handleClickSearch,
    onClickXButton: handleClickXButton,
  }
}
