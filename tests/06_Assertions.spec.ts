import { test, expect } from '@playwright/test'

test('Hard assertions test', async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1600, height: 1200 }
    });
    const page = await context.newPage();
    await page.goto('https://www.youtube.com/')
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible()
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty()
    await expect(page).toHaveTitle('YouTube')
    await expect(page).toHaveURL('https://www.youtube.com/')
    await expect(page.locator('//yt-formatted-string[text()="Home"]')).toHaveText('Home')
    await expect(page.locator('//yt-formatted-string')).toHaveCount(60)
})

test.skip('Sorted assertions test', async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1600, height: 1200 }
    });
    const page = await context.newPage();
    await page.goto('https://www.youtube.com/')
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible()
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty()
    await expect.soft(page).toHaveTitle('YoudTube')
    await expect(page).toHaveURL('https://www.youtube.com/')
    await expect(page.locator('//yt-formatted-string[text()="Home"]')).toHaveText('Home')
    await expect(page.locator('//yt-formatted-string')).toHaveCount(60)
})