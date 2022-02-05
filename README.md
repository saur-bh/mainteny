# TEST SCENARIOS for the Login Page 
https://github.com/saur-bh/Etherscan/blob/main/AssignmentForQA.pdf

# Etherscan application testing using cypress and cucumber (Gherkin syntax) -RunBook

The test was conducted on web browser ( Chrome v91  and Electron v89)

## Pre-Condition 
Install node.js and npm on the system
* Windows https://phoenixnap.com/kb/install-node-js-npm-on-windows
* Mac https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681
* Linux(ubantu) https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/

## Tech Stack 
- javaScript 
- cypress
- cypress-cucumber-preprocessor 

## UseCase which are automated for Register Page 
1. Account creation missing userName
2. Account creation missing email
3. Account creation without selecting captcha

## Demo 
https://youtu.be/uga9slNaVCA  (Unlisted)

## Setup

* Must have NodeJS and NPM installed (https://nodejs.org/en/)
* Install dependencies by running `npm install`

## Running Tests

* To run all  or indiviual tests, run `npm run cy:open` - headed Mode
* To run individual tests from command prompt , run `npm run cy:tests --glob 'cypress/integration/**/login.feature'`  - headlessMode

## Enhancement
  * Integration with CI tool i.e. Jenkins
  * API test Integration 
  * Performance testing using Karate or jMeter 
  * Alternative way to find elemnet if could not be located.
