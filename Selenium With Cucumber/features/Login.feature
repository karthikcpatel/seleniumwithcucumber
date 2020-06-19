Feature: Verify login

  Scenario: Verify login with valid credentials
    Given Open login screen
    And wait for page to load
    When I enter valid "kartik9@yopmail.com" and "password1"
    And I click on submit button
    Then I should login successfully
    And I click logout link
    Then I should logout successfully
