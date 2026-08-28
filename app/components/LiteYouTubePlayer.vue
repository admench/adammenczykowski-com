<script setup lang="ts">
const props = defineProps<{
  video: string
  title: string
  image: string
  aspectRatio: 'portrait' | 'landscape'
}>()

const videoId = computed(() => {
  const url = new URL(props.video)
  return url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).at(-1)
})
const youtubeUrl = computed(() => `https://www.youtube.com/watch?v=${videoId.value}`)
const playerAspectRatio = computed(() => props.aspectRatio === 'portrait' ? '9 / 16' : '16 / 9')
</script>

<template>
  <lite-youtube
    :videoid="videoId"
    :videotitle="title"
    videoplay="Play video"
    nocookie
    disablenoscript
    class="overflow-hidden rounded-xl border border-default shadow-xl"
    :class="aspectRatio === 'portrait' ? 'mx-auto max-w-md' : ''"
    :style="{ '--lite-youtube-aspect-ratio': playerAspectRatio }"
  >
    <!-- Native slot consumed by the lite-youtube web component. -->
    <!-- eslint-disable vue/no-deprecated-slot-attribute -->
    <img
      slot="image"
      :src="image"
      :alt="`Cover image for ${title}`"
      class="h-full w-full object-cover"
    >
    <!-- eslint-enable vue/no-deprecated-slot-attribute -->
    <a
      class="lite-youtube-fallback relative overflow-hidden rounded-xl"
      :href="youtubeUrl"
      :style="{ aspectRatio: playerAspectRatio }"
    >
      <img
        :src="image"
        :alt="`Cover image for ${title}`"
        class="absolute inset-0 h-full w-full object-cover"
      >
      <span class="relative rounded-full bg-black/80 px-5 py-3 font-medium text-white">
        Play video on YouTube
      </span>
    </a>
  </lite-youtube>
</template>

<style scoped>
lite-youtube {
  display: block;
  width: 100%;
}

.lite-youtube-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  text-decoration: none;
}

lite-youtube:not(:defined) > [slot='image'] {
  display: none;
}

lite-youtube:defined > .lite-youtube-fallback {
  display: none;
}
</style>
