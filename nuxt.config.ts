export default defineNuxtConfig({
    plugins: [{mode: "client", src: "~/plugins/axios.ts"}],
    vite: {
        server: {
            fs: {
                allow: [".."]
            },
        }
    },
    modules: [
        '@pinia/nuxt',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    css: ['@/assets/css/main.css', 'vuetify/lib/styles/main.sass', 'animate.css'],
    build: {
        transpile: ['vuetify'],
    },
    devServer: {
        port: 4000
    },
    app: {
        layoutTransition: true,
        head: {
            title: "Justpegs | #1 Picture and inspiration of different libraries combined for easy access",
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Justpegs is a collection of photo libraries and ui inspiration platforms for developers and product designers. You can search a keyword of a particular ui you want to draw inspiration from.'
                },

                //facebook og meta
                {property: "og:url", content: "https://justpegs.vercel.app/"},
                {property: "og:type", content: "website"},
                {property: "og:title", content: "https://justpegs.vercel.app/"},
                {
                    property: "og:description",
                    content: "Justpegs is a collection of photo libraries and ui inspiration platforms for developers and product designers. You can search a keyword of a particular ui you want to draw inspiration from."
                },
                {property: "og:image", content: "https://www.justpegs.vercel.app/card.png"},


                //twitter meta
                {name: "twitter:card", content: "summary_large_image"},
                {property: "twitter:domain", content: "https://justpegs.vercel.app/"},
                {property: "twitter:url", content: "https://www.justpegs.vercel.app/"},
                {name: "twitter:title", content: "https://justpegs.vercel.app/"},
                {
                    name: "twitter:description",
                    content: "Justpegs is a collection of photo libraries and ui inspiration platforms for developers and product designers. You can search a keyword of a particular ui you want to draw inspiration from."
                },
                {name: "twitter:image", content: "https://www.justpegs.vercel.app/card.png"}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
                // {rel: "stylesheet", href: "/fonts/fonts.css"}
            ],
            script: process.env.NODE_ENV === 'production' ? [
                {src: '/external-scripts/google.js'},
                {src: '/external-scripts/facebook-pixel.js'},
                {src: '/external-scripts/linkedin.js'}
            ] : [],
            charset: "utf-8",
            noscript: [{innerHTML: 'This website requires JavaScript.'}],
        },
        pageTransition: {
            mode: "in-out",
            appear: true,
            enterActiveClass: "animate__animated animate__fadeIn",
            leaveActiveClass: "animate__animated animate__fadeOutDown"
        },
        baseURL: "/"
    },

})
