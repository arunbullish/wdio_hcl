Feature: Automation Test Store User Journey

  Scenario: Register on the website and validate personal information
   Given I am on TestAutomation page
    When I click on Register on the website
    And I enter details on the personal information and click Register
    Then I should validate that the correct name and surname is displayed on the landing screen


  Scenario: Add a product to the cart and proceed to checkout
    
    When I add a product to the cart
    And I proceed to the checkout page and continue till payments
    And I should validate if the product details are correct on the payments page
    Then I should validate if the order has been placed sucessfully
