<template>
  <div class="flex w-full flex-col">
    <div
      class="flex flex-col bg-gradient-to-r from-green-100 via-green-200 to-green-300 items-center justify-center p-20"
    >
      <span class="font-semibold text-4xl md:whitespace-nowrap text-center"
        >Online Resume</span
      >
      <NuxtLink
        href="/Resume-Mark-Ryan-Guamos.pdf"
        class="inline-flex justify-center items-center bg-transparent border-2 border-black p-3 rounded-md mt-5"
        target="_blank"
      >
        DOWNLOAD
        <Icon name="grommet-icons:document-pdf" class="ml-2 w-5 h-5" />
      </NuxtLink>
    </div>
    <object type="text/html" data="/resume.html" class="w-full grow bg-white" />
  </div>
</template>

<script setup lang="ts"></script>
<style scoped></style>
