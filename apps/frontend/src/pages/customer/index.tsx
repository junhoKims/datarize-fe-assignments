import { Error } from '@/components/Error'
import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { ParamGuard } from '@/screens/customer/components/ParamGuard'
import { Purchases } from '@/screens/customer/Purchases'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useParams } from 'react-router'

export const Customer = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <ParamGuard id={id}>
      <PageLayout>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} FallbackComponent={Error}>
              <Suspense fallback={<Loading />}>
                <Purchases id={id!} />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </PageLayout>
    </ParamGuard>
  )
}
