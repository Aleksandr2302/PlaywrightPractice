# PlaywrightPractice
This project is a simple demonstration of UI testing using the [**Playwright**](https://playwright.dev/) framework.  The test suite is written in **TypeScript** and runs in the **Chromium** browser.   As a learning example, it targets the official Playwright website:   🔗 `https://playwright.dev`
## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Playwright HTML Reporter
- Visual Studio Code

## 📁 Project Structure

├── tests/ # Test scenarios
│ └── mainPage.spec.ts # Test for the main page
├── playwright.config.js # Playwright configuration
├── test-results/ # Test output
├── playwright-report/ # HTML report files
├── package.json # Project dependencies
└── README.md # Project description


## ▶️ How to Run the Tests

1. Install dependencies:

```bash
npm install
Run the test suite:
npx playwright test
View the HTML report:

npx playwright show-report
✅ Sample Test

test('main page has title and links to docs', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('a[href="/docs/intro"]')).toBeVisible();
});
🎯 Purpose of This Project
Practice Playwright fundamentals

Learn basic UI test automation

Showcase QA skills on GitHub

🔗 Useful Resources
Playwright Documentation

Playwright GitHub Repo
