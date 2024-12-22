import { useQuery } from '@tanstack/react-query'
import { me } from './api'

export function useUser() {
  const { data: user, ...other } = useQuery({
    queryKey: ['me'],
    queryFn: me,
  })

  return { user, ...other }
}
