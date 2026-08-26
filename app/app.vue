<script setup lang="ts">
const colorMode = useColorMode()
const { global } = useAppConfig()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')
const personId = `${global.siteUrl}/#person`

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  script: [{
    key: 'identity-jsonld',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [{
        '@type': 'Person',
        '@id': personId,
        'name': 'Adam Menczykowski',
        'url': global.siteUrl,
        'image': `${global.siteUrl}${global.picture.light}`,
        'jobTitle': ['Design Engineer', 'Full-Stack Developer', 'Technical Director'],
        'homeLocation': {
          '@type': 'Place',
          'name': 'Hitchin, Hertfordshire, UK'
        },
        'worksFor': {
          '@type': 'Organization',
          'name': 'You I Limited',
          'url': 'https://youi.design'
        },
        'sameAs': [
          'https://github.com/admench',
          'https://x.com/adammench'
        ],
        'knowsAbout': [
          'Product design',
          'Web application development',
          'Laravel',
          'Statamic',
          'Vue.js',
          'Nuxt'
        ]
      }, {
        '@type': 'WebSite',
        '@id': `${global.siteUrl}/#website`,
        'url': global.siteUrl,
        'name': 'Adam Menczykowski',
        'inLanguage': 'en-GB',
        'publisher': { '@id': personId }
      }]
    })
  }],
  htmlAttrs: {
    lang: 'en-GB'
  }
})

useSeoMeta({
  titleTemplate: title => title ? `${title} | Adam Menczykowski` : 'Adam Menczykowski',
  ogSiteName: 'Adam Menczykowski',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterCreator: '@adammench'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
