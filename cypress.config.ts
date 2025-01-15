import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'xx6sn4',
  e2e: {
    reporter: 'junit',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporterOptions: {
      mochaFile: 'results/test-results-[hash].xml', 
      toConsole:false
       
     
      
     }
  },
});
