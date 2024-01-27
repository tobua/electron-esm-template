import { existsSync } from 'node:fs'
import childProcess from 'node:child_process'
import electronPath from 'electron'
import { _electron as electron } from 'playwright'
import { test, expect } from '@playwright/test'

// Regular way to start and electron application, not recommended.
test('Successfully launches the app with a custom driver.', async () => {
  const stdio = ['inherit', 'inherit', 'inherit', 'ipc']
  const appProcess = childProcess.spawn(electronPath, ['./main.js'], {
    stdio,
    env: process.env,
  }) as any

  appProcess.on('message', (message: string) => {
    console.log('message:', message)
  })

  appProcess.send({ my: 'message' })

  await new Promise((done) => setTimeout(done, 4000))

  appProcess.kill()

  expect(appProcess.killed).toBe(true)
})

// Start the application using the Playwright helper.
test('Successfully launches the app with @playwright/test.', async () => {
  // See https://playwright.dev/docs/api/class-electronapplication for ElectronApplication documentation.
  const electronApplication = await electron.launch({ args: ['./main.js'] })

  const { appPath, isPackaged } = await electronApplication.evaluate(
    async ({ app }) => {
      return { appPath: app.getAppPath(), isPackaged: app.isPackaged }
    }
  )

  expect(appPath.endsWith('/electron-esm-template'))
  expect(isPackaged).toBe(false)

  const initialScreenshotPath = 'test/screenshots/initial.png'

  const window = await electronApplication.firstWindow()
  await window.screenshot({ path: initialScreenshotPath })

  expect(existsSync(initialScreenshotPath)).toBe(true)

  expect(await window.title()).toBe('Electron ESM Template')

  // Route electron console to CLI.
  window.on('console', console.log)

  await electronApplication.close()
})
