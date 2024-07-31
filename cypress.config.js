const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
        email: 'abc.abc@gmail.com',
        password: 'abc',
    },
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        baseUrl: 'https://coe-webstore.tdlbox.com',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
