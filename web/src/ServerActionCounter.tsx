'use client'

import { useState } from 'react'

interface Props {
  increment: (delta: number) => Promise<number>
}

export const ServerActionCounter = ({ increment }: Props) => {
  const [clientCount, setClientCount] = useState(1)
  const [serverCount, setServerCount] = useState(0)
  const [loading, setLoading] = useState(false)

  return (
    <div style={{ border: '3px blue dashed', margin: '1em', padding: '1em' }}>
      <h3>This is a client component.</h3>
      <p>Client count: {clientCount}</p>
      <p>Server count: {loading ? 'Loading...' : serverCount}</p>
      <button onClick={() => setClientCount((c) => c + 1)}>
        Increment client counter
      </button>
      <p>
        <button
          onClick={async () => {
            setLoading(true)
            const res = await increment(clientCount)
            setServerCount(res)
            setLoading(false)
          }}
          disabled={loading}
        >
          Increment server counter by {clientCount}
        </button>
      </p>
    </div>
  )
}
