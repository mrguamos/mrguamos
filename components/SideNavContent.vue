<template>
  <span class="text-center mt-4 font-semibold">Online Portfolio </span>
  <div class="flex justify-center mt-5">
    <NuxtImg
      quality="80"
      preload
      loading="lazy"
      src="avatar.jpeg"
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

  <slot />
  <div class="flex flex-col mt-auto">
    <span class="">Powered By:</span>
    <span class="mt-2 mb-10"
      ><NuxtLink to="https://vercel.com/" target="_blank" aria-label="Vercel">
        <Icon name="logos:vercel-icon" class="w-7 h-7"
      /></NuxtLink>
      <NuxtLink to="https://vuejs.org/" target="_blank" aria-label="Vue">
        <Icon name="logos:vue" class="w-7 h-7"
      /></NuxtLink>
      <NuxtLink to="https://nuxt.com/" target="_blank" aria-label="Nuxt">
        <Icon name="logos:nuxt-icon" class="w-7 h-7"
      /></NuxtLink>
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
