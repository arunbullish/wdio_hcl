/**
 * Arun Chettur
 * This page will have page objects and functions for Registration page
 */
import BasePage from "./base.page.js";

class RegistrationPage extends BasePage {
  get emailInput() {
    return $('input[id="AccountFrm_email"]');
  }

  get firstNameInput() {
    return $('input[name="firstname"]');
  }

  get lastNameInput() {
    return $('input[name="lastname"]');
  }

  get telephoneInput() {
    return $('input[id="AccountFrm_telephone"]');
  }

  get passwordInput() {
    return $('input[id="AccountFrm_password"]');
  }

  get confirmPasswordInput() {
    return $('input[id="AccountFrm_confirm"]');
  }

  get addressInput() {
    return $('input[id="AccountFrm_address_1"]');
  }

  get cityInput() {
    return $('input[id="AccountFrm_city"]');
  }

  get statedropdown() {
    return $("#AccountFrm_zone_id");
  }

  get zipInput() {
    return $('input[id="AccountFrm_postcode"]');
  }

  get loginInput() {
    return $('input[id="AccountFrm_loginname"]');
  }

  get privacyPolicyCheckbox() {
    return $('input[type="checkbox"][name="agree"]');
  }

  get continueButton() {
    return $('button[title ="Continue"]');
  }

  async enterPersonalInformationAndRegister() {
    const firstName = "John";
    const lastName = "Smith";
    const telephone = "1234567890";
    const userName = `test${new Date().getTime()}`;
    const password = "password123";
    const email = `test${new Date().getTime()}@example.com`;

    const address1 = "Mel Aus";
    const city = "Victoria";
    const zipCode = "1234567";
    await this.setValue(this.firstNameInput, firstName);
    await this.setValue(this.lastNameInput, lastName);
    await this.setValue(this.telephoneInput, telephone);

    await this.setValue(this.emailInput, email);
    await this.setValue(this.addressInput, address1);
    await this.setValue(this.cityInput, city);
    await this.setValue(this.zipInput, zipCode);
    //const statedropdown = $("#AccountFrm_zone_id");
    //statedropdown.selectByVisibleText("Aberdeen");

    await this.statedropdown.selectByVisibleText("Aberdeen");
    await this.setValue(this.loginInput, userName);
    await this.setValue(this.passwordInput, password);
    await this.setValue(this.confirmPasswordInput, password);
    await this.click(this.privacyPolicyCheckbox);

    await this.click(this.continueButton);
    //await this.waitForDisplayed(registerButton);
    //await this.click(registerButton);
  }
}

export default new RegistrationPage();
