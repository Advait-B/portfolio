import { test, expect } from '@playwright/test';

const LINKS = [
  { label: 'HOME', id: 'home' },
  { label: 'THE BOARD', id: 'board' },
  { label: 'EDUCATION', id: 'education' },
  { label: 'NOW', id: 'now' },
  { label: 'TRAVEL', id: 'travel' },
  { label: 'CHESS', id: 'chess' },
  { label: 'CONTACT', id: 'contact' },
];

test('every nav link scrolls its section into view', async ({ page }) => {
  await page.goto('/');

  for (const { label, id } of LINKS) {
    await page.getByRole('link', { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test('the brand mark scrolls back home', async ({ page }) => {
  await page.goto('/#contact');
  await page.getByRole('link', { name: /advait bagri/i }).click();
  await expect(page).toHaveURL(/#home$/);
  await expect(page.locator('#home')).toBeInViewport();
});
