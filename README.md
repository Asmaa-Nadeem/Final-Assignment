# Abstracta Cypress Suite

## Registration Test Cases
* Test the required fields in registration form
* Test a complete registration flow
* Used **faker** library to generate random email and save to fixture file.
```bash
cy.readFile("cypress/fixtures/userCredentials.json", (err, data) => {
     if (err) {
        return console.error(err);
     };
}).then((data) => {
     data.email = email
     cy.writeFile("cypress/fixtures/userCredentials.json", JSON.stringify(data))
})
```
Because file get changed after running test cases, Cypress was running test cases in infinite loop. To resolve this, `watchForFileChanges: false` is added in Config file

## Login Test Cases
* Test a complete login flow using email address in fixture file
* Test negative test cases
* Test a failed scenario to get screenshot in [HTML report](https://github.com/ayeshaamer/abstractaCypressSuite/blob/master/cypress/results/index.html)

## Cart Test Cases
* Test search product
* Test add to cart functionality
* Test update product quantity in Shopping Cart Page
* Test delete product in Shopping Cart Page

## Reporting
* Mochawesome is used for reporting
* Screenshots of failed test cases are saved in screenshot folder
* To resolve screenshot path issue, `screenshotsFolder` is used in Config file