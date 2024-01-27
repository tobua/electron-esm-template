<p align="center">
  <img src="https://github.com/tobua/electron-esm-template/raw/main/screenshot.png" alt="ESM Template Screenshot" height="300">
</p>

# electron-esm-template

A minimal ESM (ES Modules) template for Electron with Playwright configured for testing. ESM support in Electron requires at least version 28.

- React
- TypeScript
- Rsbuild
- Playwright
- Bun
- Electron Bridge
- GitHub Action Workflow

```bash
git clone https://github.com/tobua/electron-esm-template
cd electron-esm-template
bun install
bun run build # Build the application.
bun start # Open the electron application.
bun run test # Run Playwright test suite.
bun web # Open the application in the browser.
```

## Important Files

`index.tsx`: Entry file for the web application bundled for Electron.
`main.js`: Initializes the Electron application including browser windows.
`test`: Includes test suites and configuration for Playwright.

See [`electron/docs/tutorial/esm.md`](https://github.com/electron/electron/blob/main/docs/tutorial/esm.md) for the official **ES Modules (ESM) in Electron** documentation. This template has been forked from the official [Electron Quick Start](https://github.com/electron/electron-quick-start) which is still using CommonJS.
