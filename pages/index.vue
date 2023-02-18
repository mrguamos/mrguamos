<template>
  <div class="flex flex-col w-full mb-10">
    <div
      class="bg-gradient-to-r from-green-100 via-green-200 to-green-300 flex"
    >
      <div
        class="flex flex-col text-center xl:text-left xl:w-[40%] space-y-5 xl:pl-10 xl:pr-0 p-10"
      >
        <span class="font-semibold text-4xl md:whitespace-nowrap"
          >Mark Ryan Guamos</span
        >
        <span class="font-light text-2xl md:whitespace-nowrap"
          >Senior Software Engineer</span
        >
        <div>
          <span class="font-extralight">
            A software engineer that has a 10+ years of experience in fullstack
            development for complex scalable web apps. Want to know how I may
            help with your project? Please check out my
            <NuxtLink to="/resume" class="text-blue-700"> resume</NuxtLink
            >.</span
          >
        </div>
      </div>
    </div>
    <span class="text-center mt-10 font-bold text-2xl">Skills</span>
    <div
      class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 xl:p-10 mt-5"
    >
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span><Icon name="logos:java" class="w-7 h-7" /></span>
        <span class="font-bold">Java</span>
        <span class="font-light text-xs">Years of Exp: 12</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span><Icon name="logos:spring-icon" class="w-7 h-7" /></span>
        <span class="font-bold">Spring</span>
        <span class="font-light text-xs">Years of Exp: 12</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span><Icon name="logos:hibernate" class="w-7 h-7" /></span>
        <span class="font-bold">Hibernate</span>
        <span class="font-light text-xs">Years of Exp: 12</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <NuxtImg
          format="webp"
          quality="80"
          loading="lazy"
          src="mybatis.png"
          width="28"
          height="28"
          alt="mybatis"
        />
        <span class="font-bold">MyBatis</span>
        <span class="font-light text-xs">Years of Exp: 4</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span><Icon name="logos:selenium" class="w-7 h-7 rounded-md" /></span>
        <span class="font-bold">Selenium</span>
        <span class="font-light text-xs">Years of Exp: 5</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span><Icon name="logos:kubernetes" class="w-7 h-7" /></span>
        <span class="font-bold">Kubernetes</span>
        <span class="font-light text-xs">Years of Exp: 3</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span><Icon name="logos:docker-icon" class="w-7 h-7" /></span>
        <span class="font-bold">Docker</span>
        <span class="font-light text-xs">Years of Exp: 3</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span class="inline-flex space-x-2"
          ><Icon name="logos:solidity" class="w-7 h-7" />
          <Icon name="logos:web3js" class="w-7 h-7" />
        </span>
        <span class="font-bold">Blockchain</span>
        <span class="font-light text-xs">Years of Exp: 1</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span><Icon name="logos:javascript" class="w-7 h-7 rounded-md" /></span>
        <span class="font-bold">Javascript</span>
        <span class="font-light text-xs">Years of Exp: 6</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span class="inline-flex space-x-2">
          <Icon name="logos:react" class="w-7 h-7" />
        </span>
        <span class="font-bold">React</span>
        <span class="font-light text-xs">Years of Exp: 1</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span class="inline-flex space-x-2">
          <Icon name="logos:angular-icon" class="w-7 h-7" />
        </span>
        <span class="font-bold">Angular</span>
        <span class="font-light text-xs">Years of Exp: 3</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
        </span>
      </div>
      <div class="flex flex-col space-y-1 shadow-xl rounded-lg p-2">
        <span class="inline-flex space-x-2"
          ><Icon name="logos:postgresql" class="w-7 h-7" />
          <Icon name="logos:mysql" class="w-7 h-7" />
        </span>
        <span class="font-bold">SQL</span>
        <span class="font-light text-xs">Years of Exp: 12</span>
        <span class="flex items-center text-xs"
          >Rating:
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star" class="text-yellow-300 w-5 h-5" />
          <Icon name="material-symbols:star-outline" class="w-5 h-5" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
