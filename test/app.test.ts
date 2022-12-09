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
    server = await preview({ preview: { port: 5173 } })
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error != null ? reject(error) : resolve()))
    })
  })

  test('should have to be defined button', async () => {
    await page.goto('http://localhost:5173')

    const button = page.locator('button[class*="md"]').first()

    expect(button).toBeDefined()
  }, 3_000)

  test('should have default button', async () => {
    await page.goto('http://localhost:5173')

    const button = page.locator('button[class*="md"]').first()
    expect(button).toBeDefined()

    await expect(button).toHaveText('Default')
  }, 3_000)
})
