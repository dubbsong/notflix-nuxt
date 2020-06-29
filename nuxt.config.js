export default {
  mode: 'universal',
  head: {
    // title: process.env.npm_package_name || '',
    title: 'NOTFLIX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        // content: process.env.npm_package_description || '',
        content: 'Notflix',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Blinker&family=Noto+Sans+KR&display=swap',
      },
    ],
  },
  loading: '~/components/Loading.vue',
  css: ['~/assets/scss/index.scss'],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['nuxt-buefy', '@nuxtjs/axios', 'cookie-universal-nuxt'],
  axios: {},
  build: {},
}
