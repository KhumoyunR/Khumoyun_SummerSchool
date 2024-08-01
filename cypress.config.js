const { defineConfig } = require('cypress')

module.exports = defineConfig({

    reporter: 'mochawesome',
    reporterOptions: {
        overwrite: false
    },

    env: {
        email: 'abc.abc@gmail.com', // add your registered email here in quotes
        password: 'abc',            // add your registered password here in quotes
    },
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        trashAssetsBeforeRuns: true,
        baseUrl: 'https://coe-webstore.tdlbox.com',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
