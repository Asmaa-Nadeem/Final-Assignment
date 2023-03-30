const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Abstracta Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
    html: true,
    json: false,
    screenshotsFolder: "cypress/screenshots",
    reportDir: "cypress/results",
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    watchForFileChanges: false,
    testIsolation: false,
  },
});
