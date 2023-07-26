<script setup></script>
<template>
  <header class="p-5 shadow">
    <nav class="container m-auto flex justify-between items-center">
      <!-- logo  -->
      <div>
        <!-- <img class="h-10" src="/img/logo.png" alt="logo" /> -->
        admin
      </div>

      <!-- mneu  -->
      <div class="">
        <ul class="flex justify-center">
          <li>
            <router-link
              class="text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300"
              to="/"
              >Home</router-link
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
              to="/country"
              >Country</router-link
            >
          </li>
        </ul>
      </div>

      <!-- btn  -->
      <div>
        <a
          href="#"
          class="primary-btn"
          >Get Strated</a
        >
      </div>
    </nav>
  </header>

</template>
