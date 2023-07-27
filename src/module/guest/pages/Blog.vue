<script setup>
import Head from "../../../components/Head.vue";
import BlogOne from "../components/blog/BlogOne.vue";
import BlogTwo from "../components/blog/BlogTwo.vue";
import BlogThree from "../components/blog/BlogThree.vue";
import PageBanner from "../components/core/PageBanner.vue";
import data from "../../../data/data.json";
import BlogFour from "../components/blog/BlogFour.vue";
import BlogFive from "../components/blog/BlogFive.vue";
import BlogSix from "../components/blog/BlogSix.vue";
</script>

<template>
  <Head title="Blog" />
  <PageBanner title="Blog" />

  <div class="container py-20">
    <BlogOne :blogs="data.blogs" />
    <BlogTwo :blogs="data.blogs" />
    <BlogThree :blogs="data.blogs" />
    <BlogFour :blogs="data.blogs" />
    <BlogFive :blogs="data.blogs" />
    <BlogSix :blogs="data.blogs" />
  </div>
</template>
