<script setup>
import SectionTitle from "../core/SectionTitle.vue";
defineProps({
  blogs: Object,
});
</script>
<template>
  <div class="pb-10">
    <!-- Section Title Start  Don't Copy It  -->
    <SectionTitle>
      <template #title> Blog Two </template>
      <template #details>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
          dolorum officia temporibus ipsam ullam tempore, est, quisquam, id
          voluptatem in provident illum alias. Nemo consequuntur dolorum dolores
          sit autem.
        </p>
      </template>
    </SectionTitle>
    <!-- Section Title End  Don't Copy It-->

    <!--==========================
        Content Start 
        You Can Copy It 
    ==============================-->
    <div data-aos="fade">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
          <div
            v-for="(blog, index) in blogs"
            :key="blog.id"
            class="overflow-hidden rounded-lg border max-lg:max-w-sm mx-auto duration-300 group"
          >
            <div
              class="relative before:absolute before:inset-y-0 before:inset-x-0 before:w-full before:h-full before:bg-neutral-900 before:bg-opacity-80 before:opacity-0 before:z-10 hover:before:opacity-100 before:transition-all before:duration-500"
            >
              <div
                class="absolute after:absolute after:w-full after:h-full after:bg-primary after:bg-opacity-80 z-20 after:-z-10 after:top-2 after:left-2 bottom-8 right-8 bg-primary text-white flex flex-col justify-center items-center px-8 w-16 h-16 group-hover:bottom-7 group-hover:right-7 group-hover:after:top-0 group-hover:after:left-0 transition-all after:transition-all"
              >
                <span class="text-2xl font-bold leading-tight">15</span>
                <span class="text-lg font-semibold leading-tight">Dec</span>
              </div>
              <img
                :src="blog.img"
                alt=""
                class="h-60 w-full object-cover block -z-10"
              />
            </div>
            <div class="p-5">
              <div class="flex justify-between">
                <p class="font-medium pb-2 text-primary">
                  {{ blog.category_id }}
                </p>
              </div>
              <h2 class="text-xl font-bold pb-5 text-neutral-600">
                {{ blog.title }}
              </h2>
              <div class="flex gap-6">
                <p class=" text-sm pb-2 text-gray-400">
                  <span class="text-sm pr-1"><i class="fas fa-user"></i></span>
                  {{ blog.created_by }}
                </p>
                <p class=" text-sm pb-2 text-gray-400">
                  <span class="text-sm pr-1"><i class="fas fa-comment"></i></span> 4                 
                </p>
              </div>
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
