'use client'
import { useState } from 'react'

export default function Home() {
  const [key, setKey] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    if (key === 'stackadmin2008') {
      setLoggedIn(true)
    } else {
      alert('Wrong Access Key')
    }
  }

  if (loggedIn) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">PortalStack Admin Panel</h1>
        <p className="mb-6">Welcome Admin</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Manage Users</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">View Logs</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Settings</button>
        </div>
        <button onClick={() => setLoggedIn(false)} className="mt-6 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">PortalStack Login</h1>
      <input 
        type="password" 
        placeholder="Enter Access Key" 
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="border p-2 rounded mb-4 w-64"
      />
      <button onClick={handleLogin} className="px-6 py-2 bg-blue-600 text-white rounded">Login</button>
    </main>
  )
}
