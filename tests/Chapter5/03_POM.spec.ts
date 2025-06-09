
import {expect, test } from '@playwright/test'
// const LoginPage = require("../Pages/loginpage")
import LoginPage from '../../src/pages/LoginPage';
import HomePage from '../../src/pages/HomePage';   
const jsonData = JSON.parse(JSON.stringify(require("../../test-data/testdata.json")))
const regDate = JSON.parse(JSON.stringify(require("../../test-data/regesterUser.json")))

test("Login to the application with valid crediatils", async ({ page }) => {
    await page.goto("https://bookcart.azurewebsites.net/login")

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    await loginPage.loginToApplication(jsonData.validUser.userName, jsonData.validUser.password)
    await homePage.verifyHomePage()
    await homePage.logoutFromApp()
    await loginPage.verifyLoginPage()
})

test("Logihjn to the application with valid crediatils", async ({ page }) => {
    let userName = `${regDate.newUser.regUserName}${Math.floor(Math.random() * 10000)}`;
    await page.goto("https://bookcart.azurewebsites.net/login")
    const loginPage = new LoginPage(page)
    await loginPage.clickOnRegisterButton()
    await loginPage.registerNewUser({
        firstName: regDate.newUser.firstName,
        lastName: regDate.newUser.lastName,
        regUserName: userName,
        password: regDate.newUser.password,
        confirmPassword: regDate.newUser.confirmPassword,
        gender: regDate.newUser.gender
    });
    await page.waitForTimeout(2000)
    await loginPage.clickOnRegisterButton()
    await loginPage.verifyLoginPage()
})