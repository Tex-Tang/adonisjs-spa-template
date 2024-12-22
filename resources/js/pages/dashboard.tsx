import { useUser } from '@/hook'

export function DashboardPage() {
  const { user } = useUser()

  return <div>{user?.name}</div>
}
