import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="p-4 border mt-20">
        <Outlet />
      </div>
    </div>
  )
}
