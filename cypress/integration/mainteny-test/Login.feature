Feature: Login 
    As a new user 
    I should be able to login to application
    
   
  Scenario: As a user I enter 
      Given I open login page
      When I fill the email with "saurabh@dispostable.com"
      And I fill the password with "Welcome@8"
      And I click on "account" button
      Then I should see message "Username is invalid."
      
   
