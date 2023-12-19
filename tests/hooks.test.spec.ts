import { test } from "@playwright/test";

test.beforeAll(() => {
  console.log("before all");
});

test.beforeEach(() => {
  console.log("before each");
});
test("test1", async ({ page }) => {

  console.log("test1");
});

test("test2", async ({ page }) => {
  console.log("test2");
});

test.afterEach(() => {
  console.log("after each");
});

test.afterAll(() => {
  console.log("after all");
});
