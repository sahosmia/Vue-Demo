<script setup>
import { ref } from "vue";

const isMenu = ref(false);
</script>
<template>
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
      <div class="menu hidden lg:block">
        <ul class="flex justify-center">
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'header' }"
              >Header</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'hero' }"
              >Hero</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              to="/about"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              to="/service"
              >Service</router-link
            >
          </li>
          
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'protfolio' }"
              >Protfolio</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'blog' }"
              >Blog</router-link
            >
          </li>

          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'team' }"
              >Team</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'contact' }"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'testimonial' }"
              >Testimonial</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'news-letter' }"
              >News Letter</router-link
            >
          </li>
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              :to="{ name: 'footer' }"
              >Footer</router-link
            >
          </li>
          
        </ul>
      </div>

      <!-- Mobaile Menu  -->
      <div
        :class="isMenu ? 'top-16' : '-top-96'"
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
          <li>
            <router-link
              class="text-white font-semibold py-3 block hover:text-black duration-300"
              to="/country"
              >Country</router-link
            >
          </li>
        </ul>
      </div>

      <!-- btn  -->
      <!-- <div>
        <a href="#" class="primary-btn">Get Strated</a>
      </div> -->
    </nav>
  </header>
</template>
