<script setup>
import SectionTitle from "../core/SectionTitle.vue";
defineProps({
  blogs: Object,
})
</script>
<template>
  <div class="pb-10">
    <!-- Section Title Start  Don't Copy It  -->
    <SectionTitle>
      <template #title> Blog Six </template>
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
        <div
          v-for="(blog, index) in blogs"
          :key="blog.id"
          class="overflow-hidden  max-lg:max-w-sm mx-auto hover:-translate-y-4 duration-300 group"
        >
          <div class="saturate-0 group-hover:filter-none duration-300">
            <img :src="blog.img" alt="" class="h-auto w-full object-cover rounded-lg " />
          </div>
          <div class="py-5">
            <div class="flex gap-5 mb-2">
              <p class="font-medium text-sm  text-primary bg-primary bg-opacity-20 rounded-3xl px-3 ">
                {{ blog.category_id }}
              </p>
              <p class="font-medium text-sm text-gray-500">
                {{ blog.created_at }}
              </p>
            </div>
            <h2 class="text-2xl font-bold pb-5">{{ blog.title }}</h2>
            <p class="line-clamp-2 text-gray-500 mb-7 leading-loose">
              {{ blog.description }}
            </p>

            <!-- transition: all 0.3s ease; -->
            <!-- font-family: "Lato", Sans-serif; -->
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
