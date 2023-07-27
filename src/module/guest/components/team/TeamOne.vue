<script setup>
import SectionTitle from "../core/SectionTitle.vue";
defineProps({
  teams: Object,
})
</script>
<template>
  <div class="pb-10">
    <!-- Section Title Start  Don't Copy It  -->
    <SectionTitle>
      <template #title> Team One </template>
      <template #details>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error dolorum officia temporibus ipsam ullam tempore, est, quisquam, id voluptatem in provident illum alias. Nemo consequuntur dolorum dolores sit autem.</p>
      </template>
    </SectionTitle>
    <!-- Section Title End  Don't Copy It-->

    <!--==========================
        Content Start 
        You Can Copy It 
    ==============================-->
  <div  data-aos="fade">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
        <div
          v-for="(item, index) in teams"
          :key="item.id"
          class="overflow-hidden relative rounded-lg border max-lg:max-w-sm mx-auto hover:-translate-y-4 duration-300 shadow-2xl"
        >
        <h2 class=" absolute top-5 left-5 text-xl font-bold text-gray-800 w-28 ">{{ item.title }}</h2>
          <div>
            <img :src="item.img" alt="" class=" w-full object-cover" />
          </div>
          <div class="bg-gray-900 p-5 text-center">
            <h4 class=" text-white text-lg font-semibold">{{ item.designation }}</h4>
            <p class="text-primary text-md">{{ item.gmail }}</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
    <!-- Content End ----------- You Can Copy It  -->
  </div>
</template>

<style scoped>
.link-item {
  @apply text-gray-600 font-semibold px-3 hover:text-indigo-500 duration-300;
}
</style>
