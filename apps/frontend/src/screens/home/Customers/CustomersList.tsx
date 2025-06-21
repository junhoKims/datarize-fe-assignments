import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { FormatText } from '@/components/FormatText'
import { QueryFetcher } from '@/components/QueryFetcher'
import { tn } from '@/libs/tn'
import { getCustomers } from '@/screens/home/apis/getCustomers'
import { CustomersSkeleton } from '@/screens/home/Customers/components/CustomersSkeleton'
import { SortBy } from '@/screens/home/types'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

interface CustomersListProps {
  name: string
  sortBy: SortBy
}

export const CustomersList = ({ name, sortBy }: CustomersListProps) => {
  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['dashboard', 'customers', name, sortBy],
    queryFn: () => getCustomers({ name, sortBy }),
  })

  return (
    <QueryFetcher
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
      loadingFallback={<CustomersSkeleton />}
      errorFallback={<Error error={error} />}
      emptyFallback={<Empty name="구매 고객" description="다른 이름을 검색해보세요" />}
      items={data}
    >
      {(customers) => {
        return (
          <div>
            <div className="flex justify-between p-2 border-b border-gray-200 font-bold">
              <span className="flex-1 text-gray-900 font-semibold">이름</span>
              <span className="w-20 text-center text-gray-900 font-semibold">총 구매 횟수</span>
              <span className="w-32 text-right text-gray-900 font-semibold">총 구매 금액</span>
            </div>
            <ul className="customer-list">
              {customers.map((customer, index, ar) => {
                const isLastItem = index === ar.length - 1

                return (
                  <li key={customer.id}>
                    <Link
                      to={`/customer/${customer.id}`}
                      className={tn('flex justify-between p-2', isLastItem ? '' : 'border-b border-gray-200')}
                    >
                      <span className="customer-name flex-1">{customer.name}</span>
                      <span className="customer-count text-gray-500 w-20 text-center">{customer.count}</span>
                      <FormatText type="price" suffix="원" className="text-gray-600 w-32 text-right">
                        {customer.totalAmount}
                      </FormatText>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }}
    </QueryFetcher>
  )
}
