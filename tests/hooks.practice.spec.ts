import { expect, test } from "@playwright/test";

test.beforeAll(async ({ browser }) => {
  console.log(browser.version());
});

test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage();
  // ...
});

test.afterAll(async ({ page }) => {
  await page.close();
});
        


test.afterEach(async({context})=>{
 await context.clearCookies();
});


test.beforeEach( async({context})=>{
    await context.clearPermissions();
   });
   
   

  test("test01", async({page})=>{

 await page.goto("https://chat.openai.com/") 
 expect(page.url()).toContain('openai');

});



test("test02", async({page})=>{

 await page.goto("https://playwright.dev/docs/test-configuration");
 expect(page.url()).toContain("configuration");  

});
