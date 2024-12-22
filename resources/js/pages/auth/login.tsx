import { LoginValidator } from '#validators/auth'
import { login, LoginRequest } from '@/api'
import { ControlledCheckbox } from '@/components/form/checkbox'
import { ControlledInput } from '@/components/form/input'
import { Button } from '@blueprintjs/core'
import { vineResolver } from '@hookform/resolvers/vine'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export function LoginPage() {
  const { control, handleSubmit } = useForm<LoginRequest>({
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
    resolver: vineResolver(LoginValidator),
  })

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => navigate('/dashboard'),
  })

  return (
    <form
      className="flex flex-col space-y-2"
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
    >
      <div className="font-mono text-xl">Login</div>

      {mutation.isError && (
        <div className="bg-red-50 py-1 px-1.5 border-red-500 text-red-500 border">
          <strong>An error occurred</strong>
          <div>{mutation.error?.message}</div>
        </div>
      )}

      <ControlledInput label="Username" name="username" control={control} />
      <ControlledInput label="Password" name="password" type="password" control={control} />
      <ControlledCheckbox name="rememberMe" label="Remember Me" control={control} />

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Loading...' : 'Submit'}
      </Button>
    </form>
  )
}
