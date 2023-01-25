<template>
  <div class="flex w-full flex-col">
    <div
      class="flex flex-col bg-gradient-to-r from-green-100 via-green-200 to-green-300 items-center justify-center p-20"
    >
      <span class="font-semibold text-4xl md:whitespace-nowrap"
        >Online Resume</span
      >
      <NuxtLink
        href="/cv.doc"
        class="inline-flex justify-center items-center bg-transparent border-2 border-black p-3 rounded-md mt-5"
        target="_blank"
      >
        DOWNLOAD
        <Icon name="grommet-icons:document-pdf" class="ml-2 w-5 h-5" />
      </NuxtLink>
    </div>
    <div class="flex flex-col grow lg:m-20 items-center justify-center">
      <Icon name="fa6-solid:road-barrier" class="w-32 h-32 text-yellow-300" />
      <span class="text-5xl">WIP </span>

      <div class="flex mt-2">
        <div class="dot-collision"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.dot-collision {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
}
.dot-collision::before,
.dot-collision::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}
@keyframes dot-collision-before {
  0%,
  50%,
  75%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-15px);
  }
}
@keyframes dot-collision-after {
  0%,
  50%,
  75%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(15px);
  }
}
.dot-collision::before {
  @apply bg-[#9880ff] text-[#9880ff] left-[-10px] w-[10px] h-[10px];
  animation: dot-collision-before 2s infinite ease-in;
  border-radius: 5px;
}
.dot-collision::after {
  @apply bg-[#9880ff] text-[#9880ff] left-[10px] w-[10px] h-[10px];
  animation: dot-collision-after 2s infinite ease-in;
  border-radius: 5px;
  animation-delay: 1s;
}
</style>
