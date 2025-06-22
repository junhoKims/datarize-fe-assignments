import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useNavigate } from 'react-router'

interface ParamGuardProps {
  id?: string
  children: React.ReactNode
}

export const ParamGuard = ({ id, children }: ParamGuardProps) => {
  const router = useNavigate()

  useIsomorphicLayoutEffect(() => {
    if (!id) {
      alert('`id`를 찾을 수 없습니다')
      router(-1)
    }
  }, [id, router])

  return <>{children}</>
}
