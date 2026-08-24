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
      <main style={{display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: '#f5f5f5'}}>
        <h1 style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '10px'}}>PortalStack Admin Panel</h1>
        <p>Welcome Admin</p>
        <button onClick={() => setLoggedIn(false)} style={{marginTop: '20px', padding: '10px 20px', background: 'red', color: 'white', border: 'none', borderRadius: '5px'}}>Logout</button>
      </main>
    )
  }

  return (
    <main style={{display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: '#f5f5f5'}}>
      <h1 style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '20px'}}>PortalStack Login</h1>
      <input 
        type="password" 
        placeholder="Enter Access Key" 
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{padding: '10px', borderRadius: '5px', border: '1px solid gray', width: '250px', marginBottom: '10px'}}
      />
      <button onClick={handleLogin} style={{padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px'}}>Login</button>
    </main>
  )
}
