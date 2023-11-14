module.exports = {
  default: {
    paths: ['test-acceptance/features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['test-acceptance/step-definitions/**/*.ts'],
    // Use tags if you want to run a specific set of tests
    //tags: '@Selected',
    format: [
      '@cucumber/pretty-formatter',
      'html:reports/cucumber-report.html',
    ],
  },
};
