/**
 * Arun Chettur
 * This page will have page objects and functions for Home page
 */
import BasePage from "./base.page.js";
var prodName = null;
class HomePage extends BasePage {
  get registerButton() {
    return $("a=Login or register");
  }

  async clickRegister() {
    await this.waitForDisplayed(this.registerButton);
    await this.click(this.registerButton);
    await $('button[title="Continue"]').click();
  }

  async proceedToCheckout() {
    const checkoutButton = $("a[id='cart_checkout1']");
    await this.waitForDisplayed(checkoutButton);
    await this.click(checkoutButton);
  }

  async validateNameAndSurname() {
    const nameAndSurname = $("div.menu_text");
    await this.waitForDisplayed(nameAndSurname);
    return (await this.getText(nameAndSurname)) == "Welcome back John";
  }

  async addProductToCart() {
    await $("input[id='filter_keyword']").addValue("Shoes");
    await $("div.button-in-search").click();
    const prod = await $("(//a[@class='productname'])[1]");
    await prod.click();
    prodName = await $("h1.productname").getText();
    console.log("Product Name=", prodName);

    await $("ul.productpagecart").click();
    return prodName;
  }
}

export default new HomePage();

export { prodName };
