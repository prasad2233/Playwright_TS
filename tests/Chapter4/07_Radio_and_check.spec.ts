import { test, expect } from '@playwright/test'


test("checkbox radio button", async ({ page }) => {
    await page.goto('https://jqueryui.com/checkboxradio/');
    const frame = page.frameLocator('[class="demo-frame"]')

    expect(await frame.locator('[for="radio-1"]')).not.toBeChecked();
    await frame.locator('[for="radio-1"]').check();
    expect(await frame.locator('[for="radio-1"]')).toBeChecked();

    
    expect(await frame.locator('[for="checkbox-1"]')).not.toBeChecked();
    await frame.locator('[for="checkbox-1"]').check();
    expect(await frame.locator('[for="checkbox-1"]')).toBeChecked();
    
})