<template>
  <div class="flex flex-col p-10 shadow-lg rounded-lg">
    <NuxtLink :to="url" target="_blank" aria-label="site">
      <div class="flex justify-between items-center">
        <span class="text-teal-800">{{ title }}</span>
        <Icon :name="icon" class="w-10 h-10" />
      </div>
      <p class="mt-10 font-thin text-sm text-slate-500"><slot /></p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  url: string
  icon: string
}>()
</script>

<style scoped></style>
