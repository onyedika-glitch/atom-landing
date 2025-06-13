<template>
  <div class="h-10"></div>
  <div class="flex justify-between items-center p-4 sticky top-0 bg-white z-50">
    <!-- Logo and Brand Name -->

    <div class="flex flex-col gap-2">
      <div class="text-center ">
      <div class="flex items-center gap-12">
        <span class="flex items-center justify-center text-2xl font-extrabold font-Kufam text-[#121921]"></span>
        <img src="@/assets/Logo_Atom.png" alt="Atom Logo" class="w-15 h-15" />
        <span class="font-extrabold font-Kufam text-2xl text-[#121921]">ATOM</span>
      </div>
      </div>
      </div>
    <!-- Navigation Text -->
    <div class="flex gap-6 items-center justify-center flex-1">
      <p>About Us</p>
      <p>Services</p>
      <p>Contact Us</p>
    </div>

    <!-- Router Links (Optional/Hidden or Use Only One Nav System) -->
    <nav class="hidden">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </nav>
  </div>
</template>
<script setup lang="ts">
</script>