<script setup lang="ts">
const { data: page } = await useAsyncData('videos-page', () =>
  queryCollection('pages').path('/videos').first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const { data: videos } = await useAsyncData('videos', () =>
  queryCollection('videos').all()
)
if (!videos.value) throw createError({ statusCode: 404, statusMessage: 'Videos not found', fatal: true })

const { global } = useAppConfig()
const canonicalUrl = `${global.siteUrl}/videos`

usePageOgImage({
  title: page.value.title,
  description: page.value.description,
  cta: 'Watch my videos'
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: `${page.value.title} | Adam Menczykowski`,
  ogDescription: page.value.description,
  ogUrl: canonicalUrl,
  ogLocale: 'en_GB',
  twitterTitle: `${page.value.title} | Adam Menczykowski`,
  twitterDescription: page.value.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        title: 'mx-0! text-left',
        description: 'mx-0! text-left'
      }"
    />

    <UPageSection :ui="{ container: 'pt-0!' }">
      <div class="divide-y divide-default">
        <Motion
          v-for="(video, index) in videos"
          :key="video.path"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <article class="grid items-center gap-6 py-10 first:pt-0 md:grid-cols-2 lg:gap-12">
            <LiteYouTubePlayer
              :video="video.video"
              :title="video.title"
              :image="video.image"
              :aspect-ratio="video.aspectRatio"
            />

            <div class="flex flex-col items-start gap-3">
              <h2 class="text-2xl font-medium sm:text-3xl">
                <ULink
                  :to="video.path"
                  class="hover:text-primary"
                >
                  {{ video.title }}
                </ULink>
              </h2>
              <p class="text-muted">
                {{ video.description }}
              </p>
            </div>
          </article>
        </Motion>
      </div>
    </UPageSection>
  </UPage>
</template>
