<template>
  <aside
    class="hidden xl:flex sticky inset-0 overflow-auto overscroll-none h-screen flex-col max-w-sm w-full text-black text-center px-5 bg-white"
  >
    <SideNavContent>
      <ul class="mt-10 space-y-2 text-left px-10">
        <li>
          <NuxtLink
            class="inline-flex items-center justify-center"
            to="/"
            active-class="text-teal-700"
            ><Icon name="uil:user" class="w-5 h-5 mr-5" /> About Me</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="inline-flex items-center justify-center"
            to="/resume"
            active-class="text-teal-700"
            ><Icon name="ri:file-paper-2-line" class="w-5 h-5 mr-5" />
            Resume</NuxtLink
          >
        </li>
      </ul>
    </SideNavContent>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
