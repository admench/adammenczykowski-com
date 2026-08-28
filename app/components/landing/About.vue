<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :description="page.about.description"
    :links="[{ label: 'Read more', to: '/about', variant: 'subtle' }]"
    :ui="{
      container: 'pt-0!',
      headline: 'justify-start',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-muted max-w-prose sm:text-base',
      links: 'justify-start'
    }"
  />
</template>
