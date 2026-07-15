import { test, expect } from '@playwright/test';

test('page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /advait bagri/i })).toBeVisible();
});

test('no horizontal overflow at a 360px mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/');
  await expect(page.getByRole('link', { name: /advait bagri/i })).toBeVisible();

  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});
