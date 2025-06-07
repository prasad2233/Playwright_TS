import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/prasad2233/Playwright_JS');
  await page.getByRole('link', { name: 'Code' }).click();
  await page.getByRole('link', { name: 'Issues' }).click();
  await page.getByRole('link', { name: 'Pull requests' }).click();
  await expect(page.locator('#repository-container-header')).toContainText('Playwright_JS');
});