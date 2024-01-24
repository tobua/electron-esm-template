import { createRoot } from 'react-dom/client'
import { Button } from './component/Button'

createRoot(document.body).render(
  <div style={{ fontFamily: 'sans-serif' }}>
    <h1>Electron ESM Template</h1>
    We are using Node.js <span id="node-version"></span>, Chromium
    <span id="chrome-version"></span>, and Electron
    <span id="electron-version"></span>.<Button>Click Me!</Button>
  </div>
)
