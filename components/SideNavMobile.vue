<template>
  <aside class="xl:hidden">
    <div
      class="xl:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
      :class="{
        hidden: !toggle,
      }"
    ></div>

    <div
      class="z-20 ease-in-out duration-300 flex fixed h-full inset-0 overflow-auto overscroll-none flex-col max-w-sm w-full text-black text-center px-5 bg-white"
      :class="{
        '-translate-x-full': !toggle,
        'translate-x-0': toggle,
      }"
    >
      <button
        class="xl:hidden absolute top-0 right-0"
        aria-label="Menu"
        :class="{ hidden: !toggle }"
        @click="emit('close')"
      >
        <Icon
          name="material-symbols:close"
          class="h-10 w-10 absolute top-0 right-0"
          aria-label="Close Menu"
        />
      </button>
      <SideNavContent mobile @close="emit('close')" />
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  toggle: boolean
}>()
const emit = defineEmits(['close'])
</script>

<style scoped></style>
