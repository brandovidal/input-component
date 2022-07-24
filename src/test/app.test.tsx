import { afterAll, beforeAll, describe, test } from 'vitest'
import { preview } from 'vite'
import type { PreviewServer } from 'vite'
import { chromium } from 'playwright'
import type { Browser, Page } from 'playwright'
import { expect } from '@playwright/test'

describe('App', async () => {
  let server: PreviewServer
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } })
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error != null ? reject(error) : resolve()))
    })
  })

  test('should have button', async () => {
    await page.goto('http://localhost:5173')

    const button = page.locator('button[class="default md"]').first()
    expect(button).toBeDefined()

    await expect(button).toHaveText('Default')
  }, 60_000)
})
