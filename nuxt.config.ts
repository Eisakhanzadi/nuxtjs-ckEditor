export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    css: ["~/assets/styles/main.scss"],
    runtimeConfig: {
        public: {
            apiBaseUrl: 'https://www.example.com/api/'
        }
    }
})
