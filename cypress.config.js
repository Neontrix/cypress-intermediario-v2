const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      //Feedback visual API (poderia utilizar cy.api ao invés de cy.request e não precisaria do requestMode declarado como true)
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})
