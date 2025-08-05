import { test, expect } from '@playwright/test';

const elements = [
  {
    locator: (page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo Playwright',
    text: '',
    attribute: {
      type: 'href',
      value: '/',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs',
    text: 'Docs',
    attribute: {
      type: 'href',
      value: '/docs/intro',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'API' }),
    name: 'API',
    text: 'API',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Node.js' }),
    name: 'Node.js',
    text: 'Node.js',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Community' }),
    name: 'Community',
    text: 'Community',
    attribute: {
      type: 'href',
      value: '/community/welcome',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'GitHub repository',
    text: '',
    attribute: {
      type: 'href',
      value: 'https://github.com/microsoft/playwright',
    },
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Discord server' }),
    name: 'Discord server',
    text: '',
    attribute: {
      type: 'href',
      value: 'https://aka.ms/playwright/discord',
    },
  },

  {
    locator: (page) => page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Switch between dark and light',
    text: '',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Search (Ctrl+K)' }),
    name: 'Search (Ctrl+K)',
    text: '',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Get started' }),
    name: 'Get started',
    text: '',
    attribute: {
      type: 'href',
      value: '/docs/intro',
    },
  },
  {
    locator: (page) =>
      page.locator('h1', {
        name: 'Playwright enables reliable end-to-end testing for modern web apps.',
      }),
    name: 'Title',
    text: 'Playwright enables reliable end-to-end testing for modern web apps.',
  },
];

test.describe('Test of the main Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('#1 - Checking visibility for all elements on the main page', async ({ page }) => {
    for (const { locator, name, text } of elements) {
      await test.step(`Checking visibility for: ${name}`, async () => {
        const element = locator(page);
        await expect(element).toBeVisible();

        if (text) {
          await expect(element).toHaveText(text);
        }
      });
    }
  });

  test('#2-Cheking of text for all elements on the main page ', async ({ page }) => {
    for (const { locator, name, text } of elements) {
      if (!text) continue;
      await test.step(`Checking text for: ${name}`, async () => {
        const element = locator(page);
        if (text) {
          await expect(element).toHaveText(text);
        }
      });
    }
  });

  test('#3-Cheking of "href" attributes for all elements on the main page ', async ({ page }) => {
    for (const { locator, name, text, attribute } of elements) {
      if (!attribute) continue;
      await test.step(`Checking href for: ${name}`, async () => {
        const element = locator(page);
        if (attribute) {
          await expect(element).toHaveAttribute(attribute.type, attribute.value);
        }
      });
    }
  });

  test('#4-Cheking of changing Theme on the main page ', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    const lightScreenshot = await page.screenshot();

    await page.getByRole('button', { name: 'Switch between dark and light' }).click();
    await page.getByRole('button', { name: 'Switch between dark and light' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    const darkScreenshot = await page.screenshot();
    expect(lightScreenshot.equals(darkScreenshot)).toBe(false);
  });
});
