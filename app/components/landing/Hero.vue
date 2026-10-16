<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()
const toast = useToast()

async function copyEmail() {
  try {
    await navigator.clipboard.writeText('adam@youi.design')
    toast.add({
      title: 'Email address copied',
      description: 'adam@youi.design',
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
  } catch {
    toast.add({
      title: 'Couldn’t copy email address',
      description: 'You can email me at adam@youi.design.',
      color: 'error'
    })
  }
}

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <UColorModeAvatar
        class="size-18 ring ring-default ring-offset-3 ring-offset-bg"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
      />
    </template>

    <template #title>
      {{ page.title }}
    </template>

    <template #description>
      {{ page.description }}
      <slot name="append-description" />
    </template>

    <template #links>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5
        }"
      >
        <div class="flex flex-wrap items-center justify-center gap-2">
          <UButton
            v-for="link in page.hero.links"
            :key="link.label"
            v-bind="link"
            :to="link.to === 'mailto:adam@youi.design' ? undefined : link.to"
            @click="link.to === 'mailto:adam@youi.design' && copyEmail()"
          />
        </div>
      </Motion>

      <div
        v-if="page.hero.cv"
        class="mt-4 text-sm"
      >
        <a
          :href="page.hero.cv"
          download
          class="text-muted hover:text-highlighted underline underline-offset-4"
        >
          Download CV
        </a>
      </div>

      <div class="gap-x-4 inline-flex mt-4">
        <Motion
          v-for="(link, index) of footer?.links.filter(link => 'featured' in link && link.featured)"
          :key="index"

          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5 + index * 0.1
          }"
        >
          <UTooltip :text="link.title || link['aria-label']">
            <UButton
              v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
            />
          </UTooltip>
        </Motion>
      </div>
    </template>

    <UMarquee
      v-if="false"
      pause-on-hover
      class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
    >
      <Motion
        v-for="(img, index) in page.hero.images"
        :key="index"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: index * 0.1
        }"
      >
        <NuxtImg
          width="234"
          height="234"
          class="rounded-lg aspect-square object-cover"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          v-bind="img"
        />
      </Motion>
    </UMarquee>
  </UPageHero>
</template>
