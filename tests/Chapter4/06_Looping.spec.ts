import { test, expect } from '@playwright/test'

test('Itareting over elements', async ({ page, browser }) => {
    await page.goto("https://github.com/prasad2233")
    const links = await page.$$('.repo');
    for (const elem of links) {
        const text = await elem.textContent();
        console.log(`text is ${text?.trim()}`)
    }
    console.log(`For loop    ===>`)
    for (let index = 0; index < links.length; index++) {
        const text = await links[index].textContent();
        console.log(`text is ${text?.trim()}`)
    }
    const links2 = await page.locator('.repo');
    const count = await links2.count();
    console.log(`For loop with nth element   ===>`)

    for (let index = 0; index < count; index++) {
        const text = await links2.nth(index).textContent();
        console.log(`text is ${text?.trim()}`)
    }
})