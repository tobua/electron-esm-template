export const Header = () => (
  <header
    style={{
      backgroundColor: 'lightgray',
      padding: 10,
      textAlign: 'center',
      fontSize: 16,
      // @ts-ignore
      WebkitAppRegion: 'drag',
      boxShadow: '2px 2px 10px -9px #000000',
    }}
  >
    <h1 style={{ margin: 0, color: '#0061FF' }}>Electron ESM Template</h1>
  </header>
)
