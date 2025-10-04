import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user, logout } = useAuth()
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Carbon Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">{user?.name}</span>
            <button onClick={logout} className="text-sm text-red-600 hover:underline">Logout</button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 grid gap-6">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-2">Carbon Credit Balance</h2>
          <p className="text-gray-600">0.00 tCO₂e (placeholder)</p>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-2">Projects Registered</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>No projects yet (placeholder)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-2">Transactions</h2>
          <p className="text-gray-600">No transactions (placeholder)</p>
        </section>
      </main>
    </div>
  )
}
