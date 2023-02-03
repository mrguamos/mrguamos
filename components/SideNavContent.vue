<template>
  <span class="text-center mt-4 font-semibold">Online Portfolio </span>
  <div class="flex justify-center mt-5">
    <NuxtImg
      quality="80"
      preload
      src="avatar.webp"
      class="rounded-full"
      width="200"
      height="200"
      alt="avatar"
    />
  </div>
  <span class="text-center mt-4 font-thin text-sm text-black px-5"
    >Hi, my name is Mark Ryan Guamos. Welcome to my website!
  </span>
  <div class="flex justify-center items-center mt-5 space-x-2 animate-bounce">
    <NuxtLink
      to="https://github.com/mrguamos"
      target="_blank"
      aria-label="Github"
    >
      <Icon name="uil:github" class="h-10 w-10"
    /></NuxtLink>
    <NuxtLink
      to="https://www.linkedin.com/in/mark-ryan-guamos/"
      target="_blank"
      aria-label="LinkedIn"
    >
      <Icon name="uil:linkedin" class="h-10 w-10"
    /></NuxtLink>
  </div>
  <hr class="mt-5" />
  <ul class="mt-10 space-y-2 text-left px-10">
    <li>
      <NuxtLink
        class="inline-flex items-center justify-center"
        to="/"
        active-class="text-teal-700 animate-pulse"
        @click="!mobile || emit('close')"
        ><Icon name="uil:user" class="w-5 h-5 mr-5" /> About Me</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        class="inline-flex items-center justify-center"
        to="/resume"
        active-class="text-teal-700 animate-pulse"
        @click="!mobile || emit('close')"
        ><Icon name="ri:file-paper-2-line" class="w-5 h-5 mr-5" />
        Resume</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        class="inline-flex items-center justify-center"
        to="/projects"
        active-class="text-teal-700 animate-pulse"
        @click="!mobile || emit('close')"
        ><Icon name="fa6-solid:computer" class="w-5 h-5 mr-5" />
        Projects</NuxtLink
      >
    </li>
  </ul>
  <div class="flex flex-col mt-auto">
    <span class="">Powered By:</span>
    <span class="mt-2 mb-10"
      ><NuxtLink to="https://vercel.com/" target="_blank" aria-label="Vercel">
        <Icon name="logos:vercel-icon" class="w-7 h-7"
      /></NuxtLink>
      <NuxtLink
        to="https://vuejs.org/"
        target="_blank"
        aria-label="Vue"
        class="animate-ping absolute"
      >
        <Icon name="logos:vue" class="w-7 h-7"
      /></NuxtLink>
      <NuxtLink
        to="https://vuejs.org/"
        target="_blank"
        aria-label="Vue"
        class=""
      >
        <Icon name="logos:vue" class="w-7 h-7"
      /></NuxtLink>
      <NuxtLink to="https://nuxt.com/" target="_blank" aria-label="Nuxt">
        <Icon name="logos:nuxt-icon" class="w-7 h-7"
      /></NuxtLink>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  mobile?: boolean
}>()
const emit = defineEmits(['close'])
</script>

<style scoped></style>
