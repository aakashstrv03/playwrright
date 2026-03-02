export class AssertPage{
    constructor (page){
        this.page=page
        // this.assert=page.locator('//h4[@class="subheader"]')
        this.button=page.locator('//i[text()=" Logout"]')
        
    }
    // async assertData(){
    //     await this.assert.toContainText('Welcome to the Secure Area')
    // }
    async logoutButton(){
        await this.button.click()
    }
}