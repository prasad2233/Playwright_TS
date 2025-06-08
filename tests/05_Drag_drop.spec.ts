import { test, expect, FrameLocator } from '@playwright/test'

async function selectDOB(frame: FrameLocator, year: string, month: string, day: string) {
    await frame.locator('[id="datepicker"]').click();

    // Loop until the correct year and month are selected
    while ((await frame.locator('.ui-datepicker-year').textContent()) !== year || 
           (await frame.locator('.ui-datepicker-month').textContent()) !== month) {
        await frame.locator('[title="Prev"]').click();
    }

    // Assertions to verify selection
    await expect(frame.locator('.ui-datepicker-year')).toHaveText(year);
    await expect(frame.locator('.ui-datepicker-month')).toHaveText(month);

    // Select the day
    await frame.locator(`[data-date="${day}"]`).click();
}



test("drag and drop test", async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
    const frame = page.frameLocator('[class="demo-frame"]')
    const dargElement = frame.locator('[id="draggable"]')
    const dropElement = frame.locator('[id="droppable"]')
    await dargElement.dragTo(dropElement)
})

test("date Picker", async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/');
    const frame = page.frameLocator('[class="demo-frame"]')
    await frame.locator('[id="datepicker"]').fill('06/03/2025')

    //select today date
    await frame.locator('[id="datepicker"]').click();
    await frame.locator('.ui-datepicker-today').click()

    //select DOB
    // await frame.locator('[id="datepicker"]').click();
    // while ((await frame.locator('.ui-datepicker-year').textContent() !== "2024")&&(await frame.locator('.ui-datepicker-month').textContent() !== "May")) {
    //     await frame.locator('[title="Prev"]').click();
    // }

    // // Assert that the correct year is selected
    // await expect(frame.locator('.ui-datepicker-year')).toHaveText("2024");
    // await expect(frame.locator('.ui-datepicker-month')).toHaveText("May");
    // await frame.locator('[data-date="14"]').click()

       await selectDOB(frame, "1999", "March", "24"); // Adjust date values as needed

    // Verify if the selected DOB is correctly filled in the input field
    await expect(frame.locator('#datepicker')).toHaveValue("03/24/1999");


})