import { test, expect } from "@playwright/test";
import Form from "../pages/formPage";

test("Form test", async ({ page }) => {
  const form = new Form(page);
  const appUrl = "https://demoqa.com/automation-practice-form";
  await form.navigate(appUrl);
  await form.enterFirstName("Vaishali");
  await form.enterLastName("Bansal");

  expect(page.url()).toBe(appUrl);
});
