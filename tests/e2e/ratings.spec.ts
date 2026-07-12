import { test, expect } from '@playwright/test';

test('ratings fall back to cached values when the network is unavailable', async ({ page }) => {
  await page.route('https://lichess.org/**', (route) => route.abort());

  await page.goto('/#chess');
  await page.getByText('FIDE Standard').scrollIntoViewIfNeeded();

  await expect(page.getByText('2538')).toBeVisible(); // cached lichess fallback
  await expect(page.getByText('cached')).toBeVisible();
  await expect(page.getByText('2118')).toBeVisible(); // FIDE is always static, never "cached"
});
