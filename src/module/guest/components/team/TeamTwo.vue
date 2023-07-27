<script setup>
import SectionTitle from "../core/SectionTitle.vue";
defineProps({
  teams: Object,
});
</script>
<template>
  <div class="pb-10">
    <!-- Section Title Start  Don't Copy It  -->
    <SectionTitle>
      <template #title> Team Two </template>
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-20">
          <div
            v-for="(item, index) in teams"
            :key="item.id"
            class="overflow-hidden relative max-lg:max-w-sm w-full flex flex-col items-center mx-auto duration-300 bg-slate-900 hover:bg-primary py-8 rounded group"
          >
            <div>
              <img
                :src="item.img"
                alt=""
                class="h-24 rounded-full object-cover inline-block mb-5 border-2 border-primary group-hover:border-white duration-300"
              />
            </div>
            <div class="text-center">
              <h2 class="text-xl font-bold text-white pb-3">
                {{ item.title }}
              </h2>
              <h4 class="text-gray-400 group-hover:text-gray-200  pb-4">
                {{ item.designation }}
              </h4>

              <ul class="flex justify-center">
                <li>
                  <a href="#" class="text-md px-3 text-gray-600 group-hover:text-gray-200"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-md px-3 text-gray-600 group-hover:text-gray-200"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-md px-3 text-gray-600 group-hover:text-gray-200"
                    ><i class="fab fa-linkedin"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-md px-3 text-gray-600 group-hover:text-gray-200"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
              </ul>
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
