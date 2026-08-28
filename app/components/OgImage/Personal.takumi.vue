<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps<{
  title: string
  description?: string
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
          ? 'linear-gradient(90deg, rgba(10, 10, 10, 0.98) 0%, rgba(10, 10, 10, 0.9) 48%, rgba(10, 10, 10, 0.28) 100%)'
          : 'radial-gradient(circle at 82% 18%, #374151 0%, #171717 35%, #0a0a0a 72%)'
      }"
    />

    <div class="absolute left-0 top-0 h-full w-2 bg-white" />

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
    </div>
  </div>
</template>
