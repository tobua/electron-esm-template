import { existsSync } from 'node:fs'
import { _electron as electron } from 'playwright'
import { test, expect } from '@playwright/test'

// Start the application using the Playwright helper.
test('Successfully launches the app with @playwright/test.', async () => {
  // See https://playwright.dev/docs/api/class-electronapplication for ElectronApplication documentation.
  const electronApplication = await electron.launch({ args: ['main.js'] })

  const { appPath, isPackaged } = await electronApplication.evaluate(
    async ({ app }) => {
      return { appPath: app.getAppPath(), isPackaged: app.isPackaged }
    }
  )

  expect(appPath.endsWith('/electron-esm-template'))
  expect(isPackaged).toBe(false)

  const initialScreenshotPath = 'spec/screenshots/initial.png'

  const window = await electronApplication.firstWindow()
  await window.screenshot({ path: initialScreenshotPath })

  expect(existsSync(initialScreenshotPath)).toBe(true)

  expect(await window.title()).toBe('Electron ESM Template')

  // Route electron console to CLI.
  window.on('console', console.log)

  await electronApplication.close()
})
