import { FormatText } from '@/components/FormatText'
import { QueryFetcher } from '@/components/QueryFetcher'
import { tn } from '@/libs/tn'
import { getCustomers } from '@/screens/home/apis/getCustomers'
import { CustomersError } from '@/screens/home/Customers/components/CustomersError'
import { CustomersLoading } from '@/screens/home/Customers/components/CustomersLoading'
import { SortBy } from '@/screens/home/types'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

interface CustomersListProps {
  name: string
  sortBy: SortBy
}

export const CustomersList = ({ name, sortBy }: CustomersListProps) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['dashboard', 'customers', name, sortBy],
    queryFn: () => getCustomers({ name, sortBy }),
  })

  return (
    <QueryFetcher
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
      loader={<CustomersLoading />}
      error={<CustomersError />}
      items={data}
    >
      <div className="pt-4">
        <div className="flex justify-between p-2 border-b border-gray-200 font-bold">
          <span className="flex-1">이름</span>
          <span className="w-20 text-center">총 구매 횟수</span>
          <span className="w-32 text-right">총 구매 금액</span>
        </div>
        {data && (
          <ul className="customer-list">
            {data.map((customer, index) => {
              const isLastItem = index === data.length - 1

              return (
                <li key={customer.id}>
                  <Link
                    to={`/customer/${customer.id}`}
                    className={tn('flex justify-between p-2', isLastItem ? '' : 'border-b border-gray-200')}
                  >
                    <span className="customer-name flex-1">{customer.name}</span>
                    <span className="customer-count text-gray-600 w-20 text-center">{customer.count}</span>
                    <FormatText type="price" suffix="원" className="text-blue-500 w-32 text-right">
                      {customer.totalAmount}
                    </FormatText>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </QueryFetcher>
  )
}
