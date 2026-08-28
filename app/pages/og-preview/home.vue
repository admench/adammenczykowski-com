<script setup lang="ts">
definePageMeta({
  layout: false
})

const { data: page } = await useAsyncData('og-preview-home', () => {
  return queryCollection('index').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const title = page.value.seo.title || page.value.title
const description = page.value.seo.description || page.value.description

usePageOgImage({
  title,
  description,
  image: page.value.seo.image
})

useSeoMeta({
  robots: 'noindex, nofollow'
})
</script>

<template>
  <main class="grid min-h-screen place-items-center bg-default p-6 text-center text-sm text-muted">
    OG image preview target.
  </main>
</template>
