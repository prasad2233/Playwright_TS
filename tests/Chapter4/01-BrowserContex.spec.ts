import { test, expect } from '@playwright/test'

test('mulitple browsers in playright ', async ({ page, browser }) => {
    await page.goto("https://www.youtube.com/")

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('Play wright by Testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    await page.getByRole('link', { name: 'Play wright by Testers talk' }).first().click()
    await expect(page).toHaveTitle(`Play wright by Testers talk - YouTube`)

    //new browser seesion
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    
    await page2.goto("https://www.youtube.com/")

    await page2.getByRole('combobox', { name: 'Search' }).click();
    await page2.getByRole('combobox', { name: 'Search' }).fill('Play wright by Testers talk');
    await page2.getByRole('combobox', { name: 'Search' }).press('Enter')

    await page2.getByRole('link', { name: 'Play wright by Testers talk' }).first().click()
    await expect(page2).toHaveTitle(`Play wright by Testers talk - YouTube`)

    //create new tabs
    const newTab = await context2.newPage();
    await newTab.goto("https://www.youtube.com/")

    await newTab.getByRole('combobox', { name: 'Search' }).click();
    await newTab.getByRole('combobox', { name: 'Search' }).fill('Play wright by Testers talk');
    await newTab.getByRole('combobox', { name: 'Search' }).press('Enter')

    await newTab.getByRole('link', { name: 'Play wright by Testers talk' }).first().click()
    await expect(newTab).toHaveTitle(`Play wright by Testers talk - YouTube`)
    
})