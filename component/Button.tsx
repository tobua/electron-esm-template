const buttonStyles = {
  background: 'blue',
  color: 'white',
  padding: 10,
  borderRadius: 5,
  border: 'none',
}

export function Button({ children }: { children: string }) {
  return (
    <button type="button" style={buttonStyles}>
      {children}
    </button>
  )
}
