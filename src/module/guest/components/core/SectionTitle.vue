<script setup>
import { ref } from "vue";

const isShow = ref(false);
</script>
<template>
  <div class="pb-5">
    <h2
      @click="isShow = !isShow"
      class="inline-block cursor-pointer text-2xl font-semibold text-neutral-600 hover:text-indigo-500 transition ease-in-out duration-500"
    >
      <slot name="title"></slot>
    </h2>
    <div v-if="isShow" class=" text-gray-500 max-w-96 pt-5">
      <slot name="details" ></slot>
    </div>
  </div>
</template>
