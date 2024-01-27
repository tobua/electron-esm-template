import { Bun } from '../asset/bun'
import rsbuild from '../asset/rsbuild.png'
import playwright from '../asset/playwright.svg'
import { React } from '../asset/react'
import { Electron } from '../asset/electron'
import { TypeScript } from '../asset/typescript'
import githubActions from '../asset/github-actions.png'

export const Stack = () => (
  <footer
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 10,
      padding: 20,
    }}
  >
    <Electron width={50} height={50} />
    <img style={{ width: 50, height: 50 }} src={playwright} />
    <TypeScript width={50} height={50} />
    <Bun width={50} height={50} />
    <React width={50} height={50} />
    <img style={{ width: 50, height: 50 }} src={rsbuild} />
    <img style={{ width: 50, height: 50 }} src={githubActions} />
  </footer>
)
