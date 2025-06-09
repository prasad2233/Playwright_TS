
import {expect, Page }from '@playwright/test'
import HomePageLocaters from "../Locators/HomePageLocators";
class HomePage {
    readonly page:Page
    constructor(page :Page) {
        this.page = page
    }
    async verifyHomePage() {
        await expect(this.page.locator(HomePageLocaters.userIcon)).toBeVisible()
    }

    async logoutFromApp() {
        await this.page.click(HomePageLocaters.userIcon)
        await this.page.click(HomePageLocaters.logoutButton)
    }
}

export default HomePage;