<template>
  <div class="flex w-full flex-col mb-10">
    <div
      class="flex flex-col bg-gradient-to-r from-green-100 via-green-200 to-green-300 items-center justify-center p-20"
    >
      <span class="font-semibold text-4xl md:whitespace-nowrap text-center"
        >Projects</span
      >
    </div>
    <!-- <div class="flex flex-col grow lg:m-20 items-center justify-center">
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
    </div> -->
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10 px-10 mt-5"
    >
      <ProjectCards
        v-for="project in projects"
        :key="project.url"
        :title="project.title"
        :url="project.url"
        :icon="project.icon"
        >{{ project.content }}</ProjectCards
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import ProjectCards from '~~/components/ProjectCards.vue'

type Project = {
  title: string
  url: string
  icon: string
  content: string
}

const projects: Project[] = [
  {
    title: 'DefiKnight',
    url: 'https://defiknight.io/',
    icon: 'skill-icons:solidity',
    content: 'Play To Earn Fantasy Medieval Blockchain NFT GAME',
  },
  {
    title: 'TikTok Downloader',
    url: 'https://kotkit.deno.dev/',
    icon: 'logos:tiktok-icon',
    content: 'TikTok Downloader made with Deno Fresh',
  },
  {
    title: 'M3 Jenkinsfile',
    url: 'https://github.com/mrguamos/jenkins-pipeline-maven-multi-module',
    icon: 'vscode-icons:file-type-jenkins',
    content:
      'Cross Platform Jenkins Multi Branch Pipeline for Maven Multi-Module Project',
  },
  {
    title: 'T3 TMDB',
    url: 'https://t3-tmdb.vercel.app/',
    icon: 'cib:the-movie-database',
    content:
      'Movie app demo built using NextJS, React, TailwindCSS, The Movie Database API and TypeScript.',
  },
  {
    title: 'PokeNext',
    url: 'https://pokenext-fawn.vercel.app/',
    icon: 'arcticons:pokemon-unite',
    content: 'Pokemon Gallery powered by PokéAPI',
  },
  {
    title: 'Online Portfolio',
    url: 'https://mrguamos.vercel.app/',
    icon: 'bytesize:portfolio',
    content: 'My Personal Website',
  },
]
</script>

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
