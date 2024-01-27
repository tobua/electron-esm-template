import { join } from 'path'
import { _electron } from 'playwright'

export const wait = (time: number) =>
  new Promise((done) => {
    setTimeout(done, time)
  })

export const initialize = async () => {
  const electronApplication = await _electron.launch({
    args: [join(process.cwd(), 'main.js')],
    env: {
      ...process.env,
      NODE_ENV: 'test',
    },
  })

  // Redirect electron logs to playwright runner.
  const { stdout, stderr } = electronApplication.process()
  if (!stdout || !stderr) {
    process.exit(0)
  }
  // eslint-disable-next-line no-console
  stdout.on('data', (data) => console.log(data.toString()))
  stderr.on('data', (error) => {
    const text = error.toString()
    if (text.includes('handshake failed')) return
    // eslint-disable-next-line no-console
    console.log(text)
  })

  const window = await electronApplication.firstWindow()

  return {
    electron: electronApplication,
    main: window,
  }
}

export const close = async (app: Awaited<ReturnType<typeof initialize>>) => {
  await app.electron.close()
}
