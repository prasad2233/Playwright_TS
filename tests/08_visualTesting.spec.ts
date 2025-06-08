import { test, expect } from '@playwright/test'


test(`Visual test in playwright `, { tag: ['@VISUAL'] }, async ({ page }) => {
    // test.setTimeout(1 * 60 * 1000)
    await page.goto("https://github.com/login")

    await expect(page).toHaveScreenshot('GihubLoginpage.png',{timeout:1000})
    // await page.waitForTimeout(60000)
})
