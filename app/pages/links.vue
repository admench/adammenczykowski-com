<script setup lang="ts">
definePageMeta({
  layout: false
})

const { data: page } = await useAsyncData('links', () => {
  return queryCollection('links').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()
const canonicalUrl = `${global.siteUrl}/links`

usePageOgImage({
  title: page.value.seo.title,
  description: page.value.seo.description,
  image: page.value.seo.image
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

useSeoMeta({
  title: page.value.seo.title,
  description: page.value.seo.description,
  ogTitle: `${page.value.seo.title} | Adam Menczykowski`,
  ogDescription: page.value.seo.description,
  ogUrl: canonicalUrl,
  ogLocale: 'en_GB',
  twitterTitle: `${page.value.seo.title} | Adam Menczykowski`,
  twitterDescription: page.value.seo.description
})
</script>

<template>
  <div
    v-if="page"
    class="relative min-h-[100svh] overflow-hidden bg-default"
  >
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--ui-bg-elevated),transparent_48%)]" />

    <UContainer class="relative flex min-h-[100svh] max-w-xl flex-col px-5 py-5 sm:py-8">
      <div class="flex items-center justify-between">
        <UButton
          to="/"
          icon="i-lucide-arrow-left"
          label="Home"
          color="neutral"
          variant="ghost"
          aria-label="Back to Adam's homepage"
        />
        <ColorModeButton />
      </div>

      <main class="flex flex-1 flex-col justify-center py-12 sm:py-16">
        <header class="flex flex-col items-center text-center">
          <UAvatar
            :src="page.avatar.src"
            :alt="page.avatar.alt"
            size="3xl"
            class="size-28 ring-1 ring-default ring-offset-4 ring-offset-bg sm:size-32"
          />

          <h1 class="mt-7 font-serif text-4xl tracking-tight text-highlighted sm:text-5xl">
            {{ page.name }}
          </h1>
          <p class="mt-1 text-sm font-medium text-muted">
            {{ page.handle }}
          </p>
          <p class="mt-5 max-w-md text-pretty text-base leading-7 text-toned sm:text-lg">
            {{ page.bio }}
          </p>
        </header>

        <div class="mt-10 space-y-8">
          <section>
            <h2 class="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              <UIcon
                name="i-lucide-pin"
                class="size-3.5"
              />
              Pinned
            </h2>
            <div class="grid gap-3">
              <UButton
                v-for="link in page.pinnedLinks"
                :key="link.to"
                :to="link.to"
                :label="link.label"
                :icon="link.icon"
                trailing-icon="i-lucide-arrow-up-right"
                target="_blank"
                color="neutral"
                variant="soft"
                size="xl"
                class="w-full justify-between rounded-2xl px-5 py-4 shadow-sm transition-transform hover:-translate-y-0.5"
              />
            </div>
          </section>

          <section v-if="page.otherLinks.length">
            <h2 class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Other links
            </h2>
            <div class="grid gap-3">
              <UButton
                v-for="link in page.otherLinks"
                :key="link.to"
                :to="link.to"
                :label="link.label"
                :icon="link.icon"
                trailing-icon="i-lucide-arrow-up-right"
                target="_blank"
                color="neutral"
                variant="outline"
                size="xl"
                class="w-full justify-between rounded-2xl bg-default/70 px-5 py-4 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5"
              />
            </div>
          </section>
        </div>
      </main>

      <footer class="pb-2 text-center text-xs text-dimmed">
        adammenczykowski.com
      </footer>
    </UContainer>
  </div>
</template>
