Feature: Login 
    As a new user 
    I should be able to login to application
    
   
  Scenario: As a user I enter incorrect credential and get error message
      Given I open login page
      When I fill the email with "saurabh@dispostable.com"
      And I fill the password with "Welcome@8"
      And I click on " Login " button
      Then I should see message "Bad username or password"

  Scenario: As a user I enter correct credential and I see dashboard
      Given I open login page
      When I fill the email with "engineering@mainteny.com"
      And I fill the password with "Mainteny@2021"
      And I click on " Login " button
      Then I see "dashboard" in the url
      And Logout from application
  

  Scenario: As a user when I click on forget password should be taken to reset password page
      Given I open login page
      When I click on forget password link
      Then I see "forget-password" in the url

      
   
