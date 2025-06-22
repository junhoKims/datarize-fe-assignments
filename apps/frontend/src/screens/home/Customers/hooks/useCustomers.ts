import type { SortBy } from '@/screens/home/types'
import { useState } from 'react'

export const useCustomers = () => {
  const [name, setName] = useState('')
  const [sortBy, setSortBy] = useState<SortBy>('')

  const onClickSearch = (name: string, sortBy: SortBy) => {
    setName(name)
    setSortBy(sortBy)
  }

  return {
    name,
    sortBy,
    onClickSearch,
  }
}
