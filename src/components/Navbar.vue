<template>
  <div class="h-10"></div>
  <div class="flex justify-between items-center px-4 md:px-8 p-4 sticky top-0 bg-white z-50 max-w-7xl mx-auto">
    <!-- Logo and Brand Name -->
    <div class="flex flex-col gap-2">
      <div class="text-center">
        <div class="flex items-center gap-4 md:gap-12">
          <span class="flex items-center justify-center text-2xl font-extrabold font-Kufam text-[#121921]"></span>
          <!-- Group logo and ATOM text tightly -->
          <div class="flex items-center gap-2">
            <img src="@/assets/Logo_Atom.png" alt="Atom Logo" class="w-12 h-12" />
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

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 items-center text-center">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact-us">Contact Us</router-link>
    </nav>

    <!-- Mobile Hamburger -->
    <div class="md:hidden flex items-center">
      <button @click="isOpen = !isOpen" class="focus:outline-none">
        <svg v-if="!isOpen" class="w-8 h-8 text-[#121921]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"/>
        </svg>
        <svg v-else class="w-8 h-8 text-[#121921]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-40 z-50 flex flex-col items-end"
        @click.self="isOpen = false"
      >
        <div class="bg-white w-3/4 max-w-xs h-full shadow-lg p-8 flex flex-col gap-6">
          <router-link to="/" @click="isOpen = false" class="text-lg font-semibold text-[#121921]">Home</router-link>
          <router-link to="/about" @click="isOpen = false" class="text-lg font-semibold text-[#121921]">About Us</router-link>
          <router-link to="/services" @click="isOpen = false" class="text-lg font-semibold text-[#121921]">Services</router-link>
          <router-link to="/contact-us" @click="isOpen = false" class="text-lg font-semibold text-[#121921]">Contact Us</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>