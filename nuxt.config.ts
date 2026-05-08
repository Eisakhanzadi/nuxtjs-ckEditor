export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    app:{
      head:{
          title:'ckEditor-5',
          link:[{
              rel:'icon',
              type:'image/jpeg',
              href:'/icon.jpg'
          }]
      }
    },
    modules: ['@nuxtjs/tailwindcss'],
    css: ["~/assets/styles/main.scss"],
    runtimeConfig: {
        public: {
            apiBaseUrl: 'https://www.example.com/api/'
        }
    }
})
