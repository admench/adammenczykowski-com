<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.projects.title"
    :description="page.projects.description"
    :ui="{
      container: 'pt-0! gap-6 sm:gap-6',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-muted sm:text-base'
    }"
  >
    <UPageGrid class="gap-4">
      <UPageCard
        v-for="project in page.projects.items"
        :key="project.title"
        :title="project.title"
        :ui="{ container: 'p-4 sm:p-5', title: 'text-base' }"
      >
        <template #leading>
          <img
            :src="project.favicon"
            alt=""
            width="24"
            height="24"
            loading="lazy"
            class="size-6 rounded-sm object-contain"
          >
        </template>

        <template #description>
          <div class="space-y-3 text-sm leading-relaxed">
            <p>{{ project.problem }}</p>
            <p>{{ project.contribution }}</p>
            <p class="text-toned">
              <span class="font-medium text-highlighted">Result:</span>
              {{ project.result }}
            </p>
          </div>
        </template>

        <!-- Replace each image src in content/index.yml when screenshots are ready. -->
        <img
          v-if="false"
          :src="project.image.src"
          :alt="project.image.alt"
          width="640"
          height="360"
          loading="lazy"
          class="aspect-video w-full rounded-md bg-elevated object-cover"
        >

        <template #footer>
          <p class="text-xs text-muted">
            {{ project.stack }}
          </p>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
