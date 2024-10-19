<template>
  <NuxtLayout>
    <NavBar />
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import NavBar from "~/layouts/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
