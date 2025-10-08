# PlaywrightPractice

## Description:
This is a demonstration of UI testing using Playwright. The test suite is written in TypeScript and runs in the Chromium browser. This project serves as a learning example targeting the official Playwright website: https://playwright.dev

##🛠️ Tech Stack

Playwright

TypeScript

Playwright HTML Reporter

Visual Studio Code

## 📁 Project Structure
PlaywrightPractice/
├── tests/ # Test scenarios
│ └── mainPage.spec.ts # Test for the main page
├── playwright.config.js # Playwright configuration
├── test-results/ # Test output
├── playwright-report/ # HTML report files
├── package.json # Project dependencies
└── README.md # Project description

## ▶️ How to Run the Tests

Install dependencies:

npm install


Run the test suite:

npx playwright test


View the HTML report:

npx playwright show-report

## ✅ Sample Test
test('main page has title and links to docs', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('a[href="/docs/intro"]')).toBeVisible();
});
