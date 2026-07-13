import { test, expect } from '@playwright/test';

test('every education item opens its story and returns focus on close', async ({ page }) => {
  await page.goto('/#education');
  const items = page.locator('#education li button');
  const count = await items.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const item = items.nth(i);
    const fullText = (await item.textContent())!;

    await item.click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    const dialogTitle = (await dialog.locator('h3').textContent())!;
    expect(fullText).toContain(dialogTitle);

    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(item).toBeFocused();
  }
});
