<template>
  <div class="relative">
    <Navbar />
    <router-view />
    <About />
    <Services />
    <Footprint />
    <Products />
    <AI/> 
    <Group/>
    <How/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Footprint from '@/components/Footprint.vue'
import Products from '@/components/Products.vue'
import AI from '@/components/AI.vue'
import Group from '@/components/Group.vue'
import How from '@/components/How.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>

</style>