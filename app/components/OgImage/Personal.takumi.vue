<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps<{
  title: string
  description?: string
  cta?: string
  image?: string
}>()
</script>

<template>
  <div
    class="relative flex h-full w-full overflow-hidden bg-neutral-950 text-white"
    data-theme="dark"
  >
    <img
      v-if="image"
      :src="image"
      class="absolute inset-0 h-full w-full object-cover"
    >

    <div
      class="absolute inset-0"
      :style="{
        background: image
          ? 'linear-gradient(90deg, rgba(10, 10, 10, 0.98) 0%, rgba(10, 10, 10, 0.9) 48%, rgba(10, 10, 10, 0.1) 100%)'
          : 'radial-gradient(circle at 82% 18%, #374151 0%, #171717 35%, #0a0a0a 72%)'
      }"
    />

    <div class="relative flex flex-1 flex-col justify-between px-20 py-16">
      <div class="flex items-center gap-4 text-3xl font-medium text-neutral-300">
        <span>Adam Menczykowski</span>
      </div>

      <div class="flex max-w-[850px] flex-col gap-6">
        <h1 class="m-0 text-[72px] font-bold leading-[1.05] tracking-tight text-white">
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="m-0 max-w-[790px] text-[30px] leading-[1.35] text-neutral-300"
          :style="{ lineClamp: 2, textOverflow: 'ellipsis' }"
        >
          {{ description }}
        </p>
      </div>

      <div
        v-if="cta"
        class="flex self-start items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-xl font-medium text-white mb-12"
      >
        <span>{{ cta }}</span>
        <span aria-hidden="true">→</span>
      </div>
    </div>
  </div>
</template>
