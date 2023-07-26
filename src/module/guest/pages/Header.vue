<script setup>
import Head from "../../../components/Head.vue";
import PageBanner from "../components/core/PageBanner.vue";
import HeaderOne from "../components/header/HeaderOne.vue";
import HeaderThree from "../components/header/HeaderThree.vue";
import HeaderTwo from "../components/header/HeaderTwo.vue";
</script>

<template>
  <Head title="Header" />
  <PageBanner title="Header" />

  <div class="">
    <div class="container py-20">
      <HeaderOne />
      <HeaderTwo />
      <HeaderThree />
    </div>
  </div>
</template>
