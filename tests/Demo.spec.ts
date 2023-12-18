import { test, expect } from "@playwright/test";
import playwrightConfig from "../playwright.config";

test("First Test", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/writing-tests");
  await expect(page.url()).toContain("tests");
});



test("test1", async({page})=>{
 
  

});





