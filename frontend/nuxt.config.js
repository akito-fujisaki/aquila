export default {
  server: {
    host: '0.0.0.0',
    port: process.env.FRONTEND_PORT || '3000'
  },
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~/assets/scss/reset.scss', lang: 'scss' }
  ],
  plugins: [
    '~/plugins/axios'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/stylelint-module'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  build: {}
}
