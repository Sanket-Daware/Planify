import Sidebar from './Sidebar'

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-60">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
