<script setup>

import Head from "../../../components/Head.vue";
import BlogOne from "../components/blog/BlogOne.vue";
import BlogTwo from "../components/blog/BlogTwo.vue";
import PageBanner from "../components/core/PageBanner.vue";
import data from "../../../data/data.json";

</script>

<template>
  <Head title="Blog" />
  <PageBanner title="Blog" />

  <div class="container py-20">
    <BlogOne :blogs="data.blogs"/>
    <BlogTwo :blogs="data.blogs"/>
  </div>
</template>
