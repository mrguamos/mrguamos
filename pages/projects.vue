<template>
  <div class="flex w-full flex-col">
    <div
      class="flex flex-col bg-gradient-to-r from-green-100 via-green-200 to-green-300 items-center justify-center p-20"
    >
      <span class="font-semibold text-4xl md:whitespace-nowrap text-center"
        >Projects</span
      >
    </div>
    <div class="flex flex-col grow lg:m-20 items-center justify-center">
      <Icon name="fa6-solid:road-barrier" class="w-32 h-32 text-yellow-500" />
      <span class="font-semibold text-5xl">WIP</span>

      <div class="flex mt-10">
        <span
          class="bg-green-500 left-[-10px] w-3 h-3 inline-block top-0 before rounded-full"
        ></span>
        <div
          class="dot-collision relative w-3 h-3 rounded-full bg-orange-500"
        ></div>
        <span
          class="bg-red-500 left-[10px] w-3 h-3 inline-block top-0 rounded-full after"
        ></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
@keyframes before {
  0%,
  50%,
  75%,
  100% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(-10px, -15px);
  }
}
@keyframes after {
  0%,
  50%,
  75%,
  100% {
    transform: translate(0, 0px);
  }
  25% {
    transform: translate(10px, -15px);
  }
}
.before {
  animation: before 2s infinite ease-in;
}
.after {
  animation: after 2s infinite ease-in;
  animation-delay: 1s;
}
</style>
