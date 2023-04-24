import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import HomePage from "../Pages/home.page.js";
import RegistrationPage from "../Pages/registration.page.js";
import CheckoutPage from "../Pages/checkout.page.js";
import checkoutPage from "../Pages/checkout.page.js";
let pName1 = null;
let pName2 = null;

Given("I am on TestAutomation page", async () => {
  await HomePage.open();
});

When("I click on Register on the website", async () => {
  await HomePage.clickRegister();
});

Given(
  "I enter details on the personal information and click Register",
  async () => {
    await RegistrationPage.enterPersonalInformationAndRegister();
  }
);

Then(
  "I should validate that the correct name and surname is displayed on the landing screen",
  async () => {
    const nameAndSurnameAreDisplayed = await HomePage.validateNameAndSurname();
    await expect(nameAndSurnameAreDisplayed).to.be.true;
  }
);

When("I add a product to the cart", async () => {
  pName1 = await HomePage.addProductToCart();
  console.log("Pname 1 inside step def = ", pName1);
});

Given("I proceed to the checkout page and continue till payments", async () => {
  await HomePage.proceedToCheckout();
  pName2 = await CheckoutPage.continueTillPayments();
  console.log("Pname 2 inside step def = ", pName2);
});

Given(
  "I should validate if the product details are correct on the payments page",
  async () => {
    const productDetailsAreCorrect = await CheckoutPage.validateProductDetails(
      pName1,
      pName2
    );
  }
);

Then("I should validate if the order has been placed sucessfully", async () => {
  await checkoutPage.confirmOrderhasbeenPlaced();
});
