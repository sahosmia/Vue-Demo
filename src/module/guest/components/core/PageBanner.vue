<script setup>
import { computed } from "vue";

const props = defineProps({
  style: Object,
  title: String,
});
const pageBanner = computed(() => {
  return props.title;
});
</script>
<template>
  <div class="py-20 bg-main-200 text-center">
    <div class="container">
      <h2 class="text-4xl text-gray-900 font-semibold">{{ pageBanner }}</h2>
      <p class="px-40 pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis beatae quo ut recusandae aliquam. Velit, eum hic sint perspiciatis voluptatibus eius officiis minima, praesentium excepturi est quidem rem sed?
      </p>
    </div>
  </div>
</template>
