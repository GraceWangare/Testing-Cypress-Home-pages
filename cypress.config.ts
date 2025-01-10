import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    reporter: 'mocha-awesome',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporterOptions: {
      reportDir: 'cypress/reports', 
      overwrite: false, 
      html: true, 
      json: true,
     }
  },
});
