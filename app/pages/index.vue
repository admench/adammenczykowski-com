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
    <LandingHero :page>
      <template #append-description>
        <div class="text-neutral-400 dark:text-neutral-500 mt-2 text-xs font-medium">
          Based in Hitchin, UK · Working remotely with teams across the UK
        </div>
      </template>
    </LandingHero>
    <LandingProjects :page />
    <LandingTestimonials :page />
    <UPageSection
      icon="i-lucide-rocket"
      title="From embedded engineering to end-to-end delivery"
      description="I work alongside established software teams and take ownership of projects directly—from architecture and implementation to ongoing development."
      :ui="{
        leadingIcon: 'text-highlighted',
        container: 'pt-0! gap-4 sm:gap-4',
        title: 'text-xl sm:text-xl lg:text-2xl font-medium',
        description: 'mt-3 text-muted max-w-prose mx-auto sm:text-base'
      }"
    />
    <LandingWorkExperience
      :page
    />
    <USeparator />
    <LandingAbout
      :page
      class="mt-8"
    />
    <LandingFAQ :page />
  </UPage>
</template>
