<script setup>
import { ref } from "vue";
import SectionTitle from "../core/SectionTitle.vue";

const isMenu = ref(false);
</script>
<template>
  <div class="pb-10">
    <!-- Section Title Start  Don't Copy It  -->
    <SectionTitle>
      <template #title> Header Two </template>
      <template #details>
        <p>lorem</p>
      </template>
    </SectionTitle>
    <!-- Section Title End  Don't Copy It-->

    <!--==========================
        Content Start 
        You Can Copy It 
    ==============================-->
    <header class="p-5 shadow relative">
      <nav class="container m-auto flex justify-between items-center">
        <!-- logo  -->
        <div>
          <!-- <img class="h-10" src="/img/logo.png" alt="logo" /> -->
          <router-link :to="{ name: 'home' }">
            <span class="text-xl md:text-2xl font-bold"
              ><span class="text-primary">T</span>ravel</span
            ></router-link
          >
        </div>
        <!-- Menu Bar  -->
        <div class="block lg:hidden duration-700">
          <span v-if="!isMenu" @click="isMenu = true" class="text-2xl"
            ><i class="fa-solid fa-bars"></i
          ></span>
          <span v-else @click="isMenu = false" class="text-2xl"
            ><i class="fa-solid fa-close"></i
          ></span>
        </div>

        <!-- menu  -->
        <div class="menu hidden lg:flex">
          <ul class="flex justify-center">
            <li>
              <router-link class="link-item" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="link-item" to="/service">Service</router-link>
            </li>

            <li>
              <router-link class="link-item" :to="{ name: 'protfolio' }"
                >Protfolio</router-link
              >
            </li>
            <li>
              <router-link class="link-item" :to="{ name: 'blog' }"
                >Blog</router-link
              >
            </li>
            <li>
              <router-link class="link-item" :to="{ name: 'contact' }"
                >Contact</router-link
              >
            </li>
          </ul>

          <ul class="flex border-l-2">
            

            <li class="">
              <a href="#" class="text-md px-3 text-gray-600"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li class="">
              <a href="#" class="text-md px-3 text-gray-600"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="">
              <a href="#" class="text-md px-3 text-gray-600"><i class="fab fa-linkedin"></i></a>
            </li>
            <li class="">
              <a href="#" class="text-md px-3 text-gray-600"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>

        <!-- Mobaile Menu  -->
        <div
          :class="isMenu ? 'top-16 opacity-100' : '-top-48 opacity-0 -z-10'"
          class="bg-primary transform transition-all ease-in-out lg:hidden absolute w-full left-0 right-0 p-10 duration-300"
        >
          <ul class="flex flex-col justify-center items-center">
            <li>
              <router-link
                class="text-white font-semibold py-3 block hover:text-black duration-300"
                :to="{ name: 'home' }"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                class="text-white font-semibold py-3 block hover:text-black duration-300"
                to="/about"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                class="text-white font-semibold py-3 block hover:text-black duration-300"
                to="/service"
                >Service</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Content End ----------- You Can Copy It  -->
  </div>
</template>

<style scoped>
.link-item {
  @apply text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300;
}
</style>
