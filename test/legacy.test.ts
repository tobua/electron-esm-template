import childProcess from 'node:child_process'
import electronPath from 'electron'
import { test, expect } from '@playwright/test'

// Regular way to start and electron application, not recommended.
test('Successfully launches the app with a custom driver.', async () => {
  const stdio = ['inherit', 'inherit', 'inherit', 'ipc']
  const appProcess = childProcess.spawn(electronPath, ['./main.js'], {
    stdio,
    env: process.env,
  })

  appProcess.on('message', (message) => {
    console.log('message:', message)
  })

  appProcess.send({ my: 'message' })

  await new Promise((done) => setTimeout(done, 4000))

  appProcess.kill()

  expect(appProcess.killed).toBe(true)
})
