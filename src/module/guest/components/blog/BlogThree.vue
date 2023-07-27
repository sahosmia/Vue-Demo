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
      <template #title> Blog Three </template>
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
        <div class="grid grid-cols-1 md:grid-cols-2  gap-8 py-20">
          <div
            v-for="(blog, index) in blogs"
            :key="blog.id"
            class="overflow-hidden   max-lg:max-w-sm mx-auto duration-300 group flex flex-col lg:flex-row gap-5 items-center"
          >
            <div class="overflow-hidden flex-1 rounded-3xl">
              <img
                :src="blog.img"
                alt=""
                class="h-60 w-full  object-cover block -z-10 group-hover:scale-105 group-hover:rotate-3 duration-500"
              />
            </div>
            <div class="p-5 flex-1">
              <div class="flex justify-between">
                <p class="font-medium pb-2 text-gray-600">
                  {{ blog.category_id }}
                </p>
              </div>
              <h2 class="text-xl font-bold pb-5 text-neutral-600">
                {{ blog.title }}
              </h2>
              <div class="flex gap-6">
                <p class="text-sm pb-2 text-gray-400">
                  <span class="text-sm pr-1"><i class="fas fa-user"></i></span>
                  {{ blog.created_by }}
                </p>
                <p class="text-sm pb-2 text-gray-400">
                  <span class="text-sm pr-1"
                    ><i class="fas fa-clock"></i
                  ></span>
                  {{ blog.created_at }}
                </p>
              </div>

              <a href="#" class="text-primary"> Read More <span class="group-hover:pl-2 duration-300"><i class="fas fa-arrow-right"></i></span></a>
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
