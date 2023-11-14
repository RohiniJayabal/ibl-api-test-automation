# Automation using Cucumber.js (Take home test by Rohini Jayabal)

This test demonstates the implementation of Automation testing for the given API using Cucumber.js in Gherkin format. The tests are written using typescript.

## Prerequisuites (environment in which the test was created)
- node 18
- npm 9+

## Frameworks used
- cucumber.js (https://cucumber.io/)
- Axios (for API call)
- PactumJs (An alternative framework to test API preferred by Cucumber.io community and equivalent to RESTAssured in Java - Commented out in code now as axios is primarily used)
- Chai (for assertions)

## How to Run

### Steps to setup the code
- `git clone` repo, `cd` into directory
- `npm install`

### Steps to run the tests
```bash
# run tests in watch mode (watch mode helps in speeding up the development of test)
$ npm run test:watch

# run tests in normal mode 
$ npm run test
```

### View reports
After the tests are executed, the reports are generated and saved in HTML format. Please refer to path -> `<ProjectDirectory>/reports/cucumber-report.html`

