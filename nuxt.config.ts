// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'lite-youtube'
    }
  },

  site: {
    url: 'https://adammenczykowski.com'
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/about/',
        '/links',
        '/blog',
        '/videos'
      ],
      crawlLinks: true
    },
    routeRules: {
      '/_og/r/': {
        redirect: '/_og/r/og-preview/home'
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      { name: 'Public Sans', provider: 'none' },
      { name: 'Instrument Serif', provider: 'none' }
    ]
  },

  ogImage: {
    // Keep the preview and resolver endpoints available during local development.
    zeroRuntime: !import.meta.dev
  }
})
