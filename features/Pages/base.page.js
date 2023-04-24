/**
 * Arun Chettur
 * This .js file will be the base class which will have the common functions
 */
class BasePage {
  async open(path = "/") {
    await browser.url(path);
  }

  async waitForDisplayed(element, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
  }

  async click(element) {
    await element.click();
  }

  async setValue(element, value) {
    await element.setValue(value);
  }

  async getText(element) {
    return await element.getText();
  }
}

export default BasePage;
