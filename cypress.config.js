const { defineConfig } = require("cypress");

module.exports = defineConfig({  
  e2e: {
    projectId: "mu8c8d",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
