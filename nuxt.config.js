export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'WBD',
    title: 'WBD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar colorx
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // '~/assets/custom-icons/css/WBD-Icons.css',
    '~/assets/styles/custom-style.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/breakpoint.js' },
    {
      src: '~/plugins/bootstrap-vue.js'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * /Doc: https://github.com/nuxt-community/moment-module
   */
  moment: {
    timezone: true
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Roboto'
      }
    },
    customVariables: ['~/assets/styles/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#e15b27',
          secondary: '#a5d9fe',
          accent: '#f8d0ce'
        },
        light: {
          primary: '#e15b27',
          secondary: '#a5d9fe',
          accent: '#f8d0ce'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
