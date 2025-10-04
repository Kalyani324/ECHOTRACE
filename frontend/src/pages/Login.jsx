import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(form.email, form.password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-semibold mb-6">Welcome back</h1>
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-gray-300" placeholder="jane@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" name="password" value={form.password} onChange={onChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-gray-300" placeholder="••••••••" required />
          </div>
          <button disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-md py-2 font-medium">
            {loading ? 'Signing in…' : 'Log in'}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">New here? <Link to="/signup" className="text-emerald-700 hover:underline">Create an account</Link></p>
      </div>
    </div>
  )
}
