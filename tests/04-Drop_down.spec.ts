import { test, expect } from '@playwright/test'

test.describe("drop down tests", async () => {
    test("first test", async ({ page }) => {
        await page.goto('https://www.facebook.com/')
        await page.getByRole('button', { name: 'Create new account' }).click()

        //select drop down value 
        await page.locator('#year').selectOption('1999')
        await page.locator('#month').selectOption('3')
        await page.locator('#day').selectOption('24')

        await expect(page.locator('#year')).toHaveValue('1999');
        await expect(page.locator('#month')).toHaveValue('3');
        await expect(page.locator('#day')).toHaveValue('24');


        //select drop down by text
    })
})