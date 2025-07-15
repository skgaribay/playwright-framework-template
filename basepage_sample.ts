// base/BasePage.ts
import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** Navigate to a URL */
  async goto(url: string) {
    await this.page.goto(url);
  }

  /** Return locator for a given selector */
  getLocator(selector: string): Locator {
    return this.page.locator(selector);
  }

  /** Wait for element to be visible */
  async waitForVisible(selector: string, timeout = 5000) {
    await this.page.locator(selector).waitFor({ state: 'visible', timeout });
  }

  /** Check if element exists on the page */
  async isElementPresent(selector: string): Promise<boolean> {
    return await this.page.locator(selector).count() > 0;
  }

  /** Check if element is visible */
  async isElementVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }

  /** Fill a text input */
  async type(selector: string, text: string) {
    const el = this.page.locator(selector);
    await el.fill(text);
  }

  /** Click an element */
  async click(selector: string) {
    const el = this.page.locator(selector);
    await el.click();
  }

  /** Get text content */
  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).textContent() ?? '';
  }

  /** Assert URL contains string */
  async assertUrlContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }

  /** Take screenshot with name */
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  /** Wait for navigation or URL change */
  async waitForNavigation() {
    await this.page.waitForNavigation();
  }

  /** Clear input field (if needed) */
  async clearInput(selector: string) {
    await this.page.locator(selector).fill('');
  }

  /** Press keyboard keys */
  async pressKey(selector: string, key: string) {
    await this.page.locator(selector).press(key);
  }

  /** Scroll to element */
  async scrollToElement(selector: string) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }
}
