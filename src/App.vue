<template>
  <div class="relative w-full overflow-x-hidden">
    <Navbar />
    <router-view />
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import Footer from "@/components/Footer.vue";
</script>

<style>
html, body {
  margin: 0;
  width: 100%;
  overflow-x: hidden;
}
 
#app {
  width: 100%;
  overflow-x: hidden;
}
</style>