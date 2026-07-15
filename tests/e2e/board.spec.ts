import { test, expect } from '@playwright/test';
import { pieces } from '../../src/data/pieces';

test('every piece on the board opens its story in the plaque', async ({ page }) => {
  await page.goto('/#board');

  for (const { title, square } of pieces) {
    const piece = page.locator(`#board button[aria-label$="on ${square}"]`);

    await piece.click();
    await expect(page.locator('#board h3')).toHaveText(title);
    await piece.click();
    await expect(page.getByText('Select a piece to read its story.')).toBeVisible();
  }
});

test('a piece can be selected and its story opened using only the keyboard', async ({ page }) => {
  await page.goto('/#board');

  let foundPiece = false;
  for (let i = 0; i < 60; i++) {
    await page.keyboard.press('Tab');
    foundPiece = await page.evaluate(() => {
      const el = document.activeElement;
      return !!el && el.closest('#board') !== null && el.hasAttribute('aria-pressed');
    });
    if (foundPiece) break;
  }
  expect(foundPiece).toBe(true);

  await page.keyboard.press('Enter');
  await expect(page.getByText('Select a piece to read its story.')).not.toBeVisible();

  let foundReadMore = false;
  for (let i = 0; i < 60; i++) {
    await page.keyboard.press('Tab');
    foundReadMore = await page.evaluate(
      () => document.activeElement?.textContent?.includes('Read full story') ?? false,
    );
    if (foundReadMore) break;
  }
  expect(foundReadMore).toBe(true);

  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
});
