// plugins/vuetify.ts
import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const v_theme: ThemeDefinition = {
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#439687',
        'primary-100': '#BCE1DA',
        'primary-300': '#7DC5B8',
        'primary-700': '#347469',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#F04438',
        info: '#53B1FD',
        success: '#32D583',
        warning: '#FDB022',
    },
    dark: false
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'v_theme',
            themes: {
                v_theme,
            }
        }
    })
    nuxtApp.vueApp.use(vuetify)
})
