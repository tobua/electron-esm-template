import { useCallback, useEffect, useState } from 'react'
import { Button } from './Button'

const inputStyles = {
  borderWidth: 2,
  borderColor: '#FF9E00',
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
}

export function Bridge() {
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)
  const sendMessage = useCallback(() => {
    window.electron.message(message)
    setMessage('')
  }, [message])
  useEffect(() => {
    window.electron.register('count', (value: number) => {
      setCount(value)
    })
  }, [setCount])

  return (
    <form style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <input
        aria-label="message"
        style={inputStyles}
        placeholder="Enter message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button aria-label="send" onClick={sendMessage}>
        Send Message
      </Button>
      <div>
        Count: <span aria-label="count">{count}</span>
      </div>
    </form>
  )
}
