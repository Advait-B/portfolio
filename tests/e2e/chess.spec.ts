import { test, expect } from '@playwright/test';

test('switching games and stepping through the replay updates the board and caption', async ({
  page,
}) => {
  await page.goto('/#chess');

  const tabs = page.getByRole('tab');
  const tabCount = await tabs.count();
  expect(tabCount).toBeGreaterThan(1);

  for (let i = 0; i < tabCount; i++) {
    await tabs.nth(i).click();
    await expect(tabs.nth(i)).toHaveAttribute('aria-selected', 'true');

    // a freshly selected game starts at its final position
    await expect(page.getByRole('button', { name: 'Forward' })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'End' })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Back' })).toBeEnabled();

    await page.getByRole('button', { name: 'Back' }).click();
    await expect(page.getByRole('button', { name: 'Forward' })).toBeEnabled();

    await page.getByRole('button', { name: 'Start' }).click();
    await expect(page.getByRole('button', { name: 'Back' })).toBeDisabled();
    await expect(page.getByText('start position')).toBeVisible();

    await page.getByRole('button', { name: 'Forward' }).click();
    await expect(page.getByText(/move 1 of/)).toBeVisible();

    await page.getByRole('button', { name: 'End' }).click();
  }
});
