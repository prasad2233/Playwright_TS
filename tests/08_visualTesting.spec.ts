import { test, expect } from '@playwright/test'


test(`Visual test in playwright `, { tag: ['@VISUAL'] }, async ({ page }) => {
    await page.goto("https://github.com/login")

    await expect(page).toHaveScreenshot('GihubLoginpage.png')
})
