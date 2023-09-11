export default {
  // gh-pages deploying
  target: 'static',
  router: {
    base: '/A7Kanban05/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'A7Kanban05',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
        integrity:
          'sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9',
        crossorigin: 'anonymous',
      },
      // {
      //   rel: 'stylesheet',
      //   href: '/css/bootstrap.min.css',
      // },
    ],
    script: [
      {
        src: '/js/bootstrap.bundle.min.js',
        type: 'text/javascript',
        mode: 'client',
      },
      // {
      //   src: '/js/bootstrap.bundle.min.js',
      //   type: 'text/javascript',
      //   mode: 'client',
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['bootstrap/dist/css/bootstrap.css'],
  // css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  //Locate the css property within the build section & include Bootstrap JavaScript
  // build: {
  //   css: ['~/assets/css/bootstrap.scss'],
  //   plugins: [{ src: '~/plugins/bootstrap.js', mode: 'client' }],
  // },

  // script: [{ src: '~/plugins/bootstrap.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
