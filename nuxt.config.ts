// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          title: "Gabe Creative Dept.",
          link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
            { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            }
          ]
        },
      },
    css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss']
})
