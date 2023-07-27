<script setup>

import Head from "../../../components/Head.vue";
import PageBanner from "../components/core/PageBanner.vue";
import data from "../../../data/data.json";
import TeamOne from "../components/team/TeamOne.vue";
import TeamTwo from "../components/team/TeamTwo.vue";


</script>

<template>
  <Head title="Team" />
  <PageBanner title="Team" />

  <div class="container py-20">

    <TeamOne :teams="data.teams_side"/>
    <TeamTwo :teams="data.teams_circle"/>
  </div>
</template>
