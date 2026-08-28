<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
const routePath = computed(() => withoutTrailingSlash(route.path))

const { data: page } = await useAsyncData(routePath.value, () =>
  queryCollection('videos').path(routePath.value).first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const { data: surround } = await useAsyncData(`${routePath.value}-surround`, () =>
  queryCollectionItemSurroundings('videos', routePath.value, {
    fields: ['description']
  })
)

const { global } = useAppConfig()
const canonicalUrl = `${global.siteUrl}${routePath.value}`

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogImage: page.value.image,
  ogUrl: canonicalUrl,
  twitterTitle: page.value.title,
  twitterDescription: page.value.description,
  twitterImage: page.value.image
})

const articleLink = canonicalUrl
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen max-w-5xl">
      <UPage v-if="page">
        <ULink
          to="/videos"
          class="text-sm flex items-center gap-1"
        >
          <UIcon name="lucide:chevron-left" />
          Videos
        </ULink>

        <div class="flex flex-col gap-6 mt-8">
          <LiteYouTubePlayer
            :video="page.video"
            :title="page.title"
            :image="page.image"
            :aspect-ratio="page.aspectRatio"
          />

          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-2">
            {{ page.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>
        </div>

        <UPageBody class="max-w-3xl mx-auto">
          <div class="flex items-center justify-end gap-2 text-sm text-muted">
            <UButton
              size="sm"
              variant="link"
              color="neutral"
              label="Copy link"
              @click="copyToClipboard(articleLink, 'Article link copied to clipboard')"
            />
          </div>
          <UContentSurround :surround />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
