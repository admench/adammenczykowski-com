<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()
const title = page.value.seo.title || page.value.title
const description = page.value.seo.description || page.value.description
const canonicalUrl = `${global.siteUrl}/`

usePageOgImage({
  title,
  description,
  cta: 'Read more',
  image: page.value.seo.image
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

useSeoMeta({
  title,
  description,
  ogTitle: `${title} | Adam Menczykowski`,
  ogDescription: description,
  ogUrl: canonicalUrl,
  ogLocale: 'en_GB',
  twitterTitle: `${title} | Adam Menczykowski`,
  twitterDescription: description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <LandingAbout :page />
    <LandingBlog :page />
    <LandingWorkExperience
      :page
    />
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>
