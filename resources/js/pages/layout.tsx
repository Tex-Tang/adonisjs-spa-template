import { Outlet } from 'react-router'

export function DefaultLayout() {
  return (
    <div>
      <div className="w-64 border-r h-screen fixed left-0 top-0"></div>
      <div className="ml-64 p-2">
        <Outlet />
      </div>
    </div>
  )
}
