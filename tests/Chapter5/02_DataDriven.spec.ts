import { test, expect } from '@playwright/test'
import testData from '../../test-data/dev/testdata.json'

type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string
    },
    TestDataSet2: {
        Skill1: string,
        Skill2: string
    }
}

const typedTestData = testData as TestData

for (const dataSetName in typedTestData) {

    const skill = typedTestData[dataSetName as keyof TestData]

    test(`Data driven test in playwright ${skill.Skill1}`, { tag: ['@DP'] }, async ({ page }) => {
        await page.goto("https://www.youtube.com/")

        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')

        await page.getByRole('link', { name: skill.Skill1 }).first().click()
        await expect(page).toHaveTitle(`${skill.Skill1} - YouTube`)
    })
}