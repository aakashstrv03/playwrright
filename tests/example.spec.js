// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { AssertPage } from '../Pages/AssertPage';
test('Page Object Model', async ({ page }) => {
    const login = new LoginPage(page)
    await login.launchUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.submitButton()

    const asser=new AssertPage(page)
    // await asser.assertData()
    await asser.logoutButton()
    
    
});
