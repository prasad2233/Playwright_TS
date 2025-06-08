import { test, expect } from '@playwright/test'

test('test1  browsers in playright ', async ({ page, browser }) => {
    await page.goto("https://www.youtube.com/")

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('Play wright by Testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    await page.getByRole('link', { name: 'Play wright by Testers talk' }).first().click()
    await expect(page).toHaveTitle(`Play wright by Testers talk - YouTube`)

})

test('test2  browsers in playright ', async ({ page, browser }) => {
    await page.goto("https://www.youtube.com/")

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('Play wright by Testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    await page.getByRole('link', { name: 'Play wright by Testers talk' }).first().click()
    await expect(page).toHaveTitle(`Play wright by Testers talk - YouTube`)

})

test('test3 browsers in playright ', async ({ page, browser }) => {
    await page.goto("https://www.youtube.com/")

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('Play wright by Testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    await page.getByRole('link', { name: 'Play wright by Testers talk' }).first().click()
    await expect(page).toHaveTitle(`Play wright by Testers talk - YouTube`)

})