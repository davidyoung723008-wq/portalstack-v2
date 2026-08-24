export default function Home() {
  return (
    <main style={{display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '40px', textAlign: 'center'}}>
      <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '20px'}}>PortalStack</h1>
      <p style={{fontSize: '20px', maxWidth: '600px', marginBottom: '30px'}}>
        Instead of emailing files/invoices, what if clients had their own login portal? 
        Everything in one place. $19/mo
      </p>
      <p style={{fontSize: '18px', marginBottom: '20px'}}>Would you use that for your clients?</p>
      <div style={{display: 'flex', gap: '20px'}}>
        <button style={{padding: '15px 30px', background: 'green', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px'}}>Yes</button>
        <button style={{padding: '15px 30px', background: 'gray', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px'}}>No</button>
      </div>
    </main>
  )
}
