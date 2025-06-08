import { test, expect } from '@playwright/test'

test('alerts in playwright', async ({ page }) => {
    page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')


    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Alert message is: ${dialog.message()}`)
        console.log(` message is: ${dialog.type()}`)
    })
    await page.getByText('See an example alert', { exact: true }).click();
})

test('confirm in playwright', async ({ page }) => {
    page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')


    page.once('dialog', dialog => {
        // dialog.accept();
        dialog.dismiss();
        console.log(`Alert message is: ${dialog.message()}`)
        console.log(` message is: ${dialog.type()}`)
    })
    await page.getByText('See a sample confirm', { exact: true }).click();
})

test('prompt in playwright', async ({ page }) => {
    page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')


    page.once('dialog',async (dialog) => {
        dialog.accept('Playwright');
        // dialog.dismiss();
        console.log(` message is: ${dialog.message()}`)
        console.log(` message is: ${dialog.type()}`)
    })
    await page.getByText('See a sample prompt', { exact: true }).click();
})