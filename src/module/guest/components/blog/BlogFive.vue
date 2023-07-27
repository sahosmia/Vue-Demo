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
      <template #title> Blog Five </template>
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
            class="overflow-hidden rounded-lg max-lg:max-w-sm mx-auto hover:-translate-y-4 duration-300 group"
          >
            <div
              class="relative "
            >
              <div
                class="absolute top-5 left-5 font-medium text-sm text-white bg-primary bg-opacity-60 rounded px-5 py-1 z-10"
              >
                <span class="text-sm">{{ blog.category_id }}</span>
              </div>
              <div class="overflow-hidden before:absolute before:inset-y-0 before:inset-x-0 before:w-0 hover:before:w-full before:h-full before:bg-neutral-900 before:bg-opacity-80 before:opacity-0 before:z-10 hover:before:opacity-100 before:transition-all before:duration-500">

                <img :src="blog.img" alt="" class="h-auto w-full object-cover" />
              </div>
            </div>
            <div class="py-16 relative">
              <div
                class="flex gap-5 mb-4 py-4 px-5 absolute w-4/5 -top-7 left-10 right-10 bg-white shadow rounded after:absolute after:border  after:bg-primary after:bg-opacity-80 z-20 after:-z-10 after:top-4 after:bottom-4 after:left-1/2 justify-around"
              >
                <p class="font-medium text-right">
                  {{ blog.created_by }}
                </p>
                <p class="font-medium text-sm text-gray-500 pl-10">
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
