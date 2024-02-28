export {} // This is somehow needed.

// Implemented in bridge.cjs
declare global {
  interface Window {
    electron: {
      message: (text: string) => void
      register: (type: string, listener: Function) => void
      isWindows: boolean
      versions: { chrome: string; node: string; electron: string }
    }
  }
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png' {
  const value: any
  export default value
}
