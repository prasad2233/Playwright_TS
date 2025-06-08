import { test, expect } from '@playwright/test'

test('Get Text and attribute ', async ({ page, browser }) => {
    await page.goto("https://github.com/prasad2233")
    const name = await page.locator('[itemprop="name"]').textContent()
    const name2 = await page.locator('[itemprop="name"]').innerText()
    console.log(name?.trim())
    console.log(name2?.trim())
    expect(name?.trim()).toBe('Prasad_Narala')

    const val = await page.getByTestId('repositories').first().getAttribute('data-selected-links')
    console.log(val?.trim())
})