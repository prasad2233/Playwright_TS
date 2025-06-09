import { Page, expect } from "@playwright/test";
import LoginPageLocators from '../Locators/LoginPageLocators'
export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async loginToApplication(userName: string, password: string) {
        await this.verifyLoginPage()
        await this.page.fill(LoginPageLocators.userName, userName)
        await this.page.fill(LoginPageLocators.password, password)
        await this.page.click(LoginPageLocators.LoginButton)
    }

    async verifyLoginPage() {
        await expect(this.page.locator(LoginPageLocators.userName)).toBeVisible()
    }

    async registerNewUser({
        firstName,
        lastName,
        regUserName,
        password,
        confirmPassword,
        gender
    }: {
        firstName: string;
        lastName: string;
        regUserName: string;
        password: string;
        confirmPassword: string;
        gender: string;
    }): Promise<void> {
        await this.page.fill(LoginPageLocators.firstName, firstName);
        await this.page.fill(LoginPageLocators.lastName, lastName);
        await this.page.fill(LoginPageLocators.regUserName, regUserName);
        await this.page.fill(LoginPageLocators.password, password);
        await this.page.fill(LoginPageLocators.confirmPassword, confirmPassword);
        await this.page.check(LoginPageLocators.gender(gender));
    }

    async clickOnRegisterButton() {
        const registerButton = this.page.locator(LoginPageLocators.registerButton);
        await registerButton.waitFor({ state: 'attached', timeout: 5000 });
        await registerButton.waitFor({ state: 'visible' });
        await registerButton.scrollIntoViewIfNeeded();
        await expect(registerButton).toBeEnabled();
        await registerButton.click();
    }
}
export default LoginPage;