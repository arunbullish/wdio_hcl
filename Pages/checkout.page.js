import { assert } from "chai";
import BasePage from "./base.page.js";

let pName = null;
let pNameText = null;

class CheckoutPage extends BasePage {
  async continueTillPayments() {
    pName = $("a.checkout_heading");

    console.log("Pname=", await pName.getText());
    pNameText = await pName.getText();
    const continueButton = $("button[id='checkout_btn']");
    await this.waitForDisplayed(continueButton);
    await continueButton.click();
    return pNameText;
  }

  async validateProductDetails(pn1, pn2) {
    if (pn1 == pn2) {
      console.log("Its a match");
    } else {
      console.log("its not a match");
    }
  }

  async confirmOrderhasbeenPlaced() {
    await expect($("span.maintext")).toHaveText(
      "YOUR ORDER HAS BEEN PROCESSED!"
    );
  }
}

export default new CheckoutPage();
