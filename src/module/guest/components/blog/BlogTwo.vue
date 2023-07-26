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
      <template #title> Blog Two </template>
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
          class="overflow-hidden rounded-lg border max-lg:max-w-sm mx-auto hover:-translate-y-4 duration-300 hover:shadow-2xl"
        >
          <div>
            <img :src="blog.img" alt="" class="h-60 w-full object-cover" />
          </div>
          <div class="p-5">
            <div class="flex justify-between">
              <p class="font-medium text-sm pb-2 text-gray-500">
                {{ blog.created_at }}
              </p>
              <p class="font-medium text-sm pb-2 text-gray-500">
                {{ blog.created_by }}
              </p>
            </div>
            <h2 class="text-xl font-bold pb-7">{{ blog.title }}</h2>
            <p class="line-clamp-3 text-gray-500 mb-7">
              {{ blog.description }}
            </p>
            <a href="#" class="read-more-primary-btn">Read More</a>

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
