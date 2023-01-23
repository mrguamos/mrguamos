<template>
  <div class="flex min-h-screen w-full">
    <button
      class="xl:hidden fixed top-5 right-5 backdrop-blur-sm"
      aria-label="Menu"
      @click="toggleDrawer"
    >
      <Icon name="carbon:menu" class="h-10 w-10" />
    </button>
    <SideNav />
    <SideNavMobile :toggle="drawer" @close="toggleDrawer" />

    <main class="flex w-full bg-slate-100/50">
      <slot class="mb-10" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { xl } from '~~/libs/tailwind'
const drawer = ref(false)

const toggleDrawer = () => {
  drawer.value = !drawer.value
  if (drawer.value) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'unset'
}

const { width } = useWindowSize()

watch(width, () => {
  if (width.value >= xl) drawer.value = false
})
</script>

<style scoped></style>
