# TEST SCENARIOS for the Login Page 
https://github.com/saur-bh/mainteny/blob/main/AssignmentForQA.md

# Mainteny application testing using cypress and cucumber (Gherkin syntax) -RunBook

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
- chai 

## UseCase which are automated for Login Page 
1. Login with invalid user
2. Login with valid user
3. Click on forget password link 

## Demo 
TBD

## Setup

* Must have NodeJS and NPM installed (https://nodejs.org/en/)
* Install dependencies by running `npm install`

## Running Tests

* To run all  or indiviual tests via GUI, run `npm run cy:open` - headed Mode
* To run tests from command prompt , run `npm run cy:tests`  - headlessMode

## Enhancement
  * Integration with CI tool i.e. Jenkins
  * Performance testing using Karate or jMeter 
  * Alternative way to find element if could not be located.
