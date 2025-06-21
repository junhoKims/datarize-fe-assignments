import type { SortBy } from '@/screens/home/types'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

export const useCustomers = () => {
  const queryClient = useQueryClient()

  const [name, setName] = useState('')
  const [sortBy, setSortBy] = useState<SortBy>(undefined)

  const onClickSearch = (name: string, sortBy: SortBy) => {
    console.log('selfinsef: ', name)
    queryClient.resetQueries()
    queryClient.resetQueries({ queryKey: ['dashboard', 'customers'] })
    queryClient.removeQueries({ queryKey: ['dashboard', 'customers'] })
    setName(name)
    setSortBy(sortBy)
  }

  return {
    name,
    sortBy,
    onClickSearch,
  }
}
