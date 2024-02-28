<p align="center">
  <img src="https://github.com/tobua/electron-esm-template/raw/main/screenshot.png" alt="ESM Template Screenshot" height="300">
</p>

# electron-esm-template

<img align="right" src="https://github.com/tobua/electron-esm-template/raw/main/logo.png" width="30%" alt="Application Logo" />

A minimal ESM (ES Modules) template for Electron with Playwright configured for testing. ESM support in Electron requires at least version 28.

- React
- TypeScript
- Rsbuild
- Playwright
- Bun
- Electron Bridge
- GitHub Action Workflow
- Packaging with `electron-builder`

```bash
git clone https://github.com/tobua/electron-esm-template
cd electron-esm-template
bun install
bun run build # Build the application.
bun start # Open the electron application.
bun run test # Run Playwright test suite.
bun web # Open the application in the browser.
bun package # Package the application into an executable.
```

## Important Files and Folders

`index.tsx`: Entry file for the web application bundled for Electron.

`main.js`: Initializes the Electron application including browser windows.

`bridge.cjs`: Runs on UI thread before `index.tsx` is rendered, can expose context to UI. Facilitates communication between the UI frontend (`index.tsx`) and the backend (`main.js`).

`test`: Includes test suites and configuration for Playwright.

`rsbuild.config.ts`: Versatile configuration for Rsbuild.

`.github/workflows/push.yml`: GitHub Action workflow that builds the application and runs the Playwright test suite on every commit to the `main` branch.

See [`electron/docs/tutorial/esm.md`](https://github.com/electron/electron/blob/main/docs/tutorial/esm.md) for the official **ES Modules (ESM) in Electron** documentation. This template has been forked from the official [Electron Quick Start](https://github.com/electron/electron-quick-start) which is still using CommonJS.

## Packaging and Distribution

To bundle the application into the proper system executable this setup uses `electron-builder`. Make sure to adapt it's configuration in the `build` entry of `package.json`, the [electron-builder configuration](https://www.electron.build/configuration/configuration) can be helpful. To package the application for local testing run `bun package` and open the resulting app in `executable/mac`. To distribute the application for various targets (only macOS configured) run `bun distribute`.

The `/build` folder contains an `icon.icns` file which can be generated with an online service from a `1024x1024` png image. The `background.png` is `540x380` in size and this will be used as the background when the installation dialogue appears on macOS.

With a regular package build it's not possible to inspect the contents of the resulting application. To make sure only the assets you want are packaged set `build.asar` to `false` in `package.json`. You can open the resulting `.app` file in your editor like a regular folder and the contents will reside in `/Contents/Resources/app`. Dependencies installed as `devDependencies` will not be packaged. The signing step in `bun package` can take some time and requires access to a remote server. When debugging the build it can be disabled with `CSC_IDENTITY_AUTO_DISCOVERY=false electron-build --dir`.
