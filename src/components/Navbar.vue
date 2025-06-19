<template>
  <div class="h-10"></div>
  <div class="flex justify-between items-center p-4 sticky top-0 bg-white z-50  max-w-7xl mx-auto ">
    <!-- Logo and Brand Name -->

    <div class="flex flex-col gap-2">
      <div class="text-center">
        <div class="flex items-center gap-12">
          <span class="flex items-center justify-center text-2xl font-extrabold font-Kufam text-[#121921]"></span>
          <!-- Group logo and ATOM text tightly -->
          <div class="flex items-center gap-2">
            <img src="@/assets/Logo_Atom.png" alt="Atom Logo" class="w-15 h-15" />
<span
  class="font-kufam font-extrabold font-Kufam text-2xl text-[#121921]"
  style="
    font-family: 'Kufam', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 0%;
  "
>
  ATOM
</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Text -->
    <div class="hidden">
      <p>About Us</p>
      <p>Services</p>
      <p>Contact Us</p>
    </div>

    <nav class="absolute left-1/2 transform -translate-x-1/2 flex gap-6 items-center text-center">

      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact-us">Contact Us</router-link>
    </nav>
  </div>
</template>
<script setup lang="ts">
</script>