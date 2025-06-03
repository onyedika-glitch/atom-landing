<template>
  <div class="h-10"></div>
  <section class="relative bg-[#F2FDFF] pb-20 pt-16 px-4 md:px-20 flex flex-col items-center justify-center text-center">
    <!-- Top-right animation -->
    <img
        src="@/assets/Cube.png"
        alt="Animated graphic"
        class="animated-cube absolute top-10 right-10 w-56 h-56 opacity-30 pointer-events-none"
    />
    <div class="h-10"></div>
    <div class="text-center max-w-3xl mx-auto">
      <!-- Heading -->
      <div class="h-10"></div>
      <h1 class="text-4xl font-extrabold text-gray-900">
        <span class="text-4xl font-extrabold text-gray-900">From</span>
        <span class="text-4xl font-extrabold text-[#01B8C6]"> Bold Ideas </span>
        <span class="text-4xl font-extrabold text-gray-900">to</span>
        <span class="block mt-2 text-4xl font-extrabold text-[#01B8C6]">Industry Changing</span>
        <span class="block mt-2 text-4xl font-extrabold text-gray-900">Solutions.</span>
      </h1>
    </div>

      <!-- Breadcrumb-like space -->
      <div class="h-10"></div>

      <!-- Subheading -->
      <p class="text-base md:text-lg text-gray-600 mt-8">
        Africa’s Emerging AI Powerhouse – Building Tomorrow’s Tech Today.<br />
        Directly states your market positioning and innovative edge.
      </p>

      <div class="h-10"></div>
      <div class="mt-10 flex justify-center gap-4">
        <div class="h-10"></div>
        <div class="flex flex-wrap gap-4 mt-8">
          <router-link
              to="/products"
              class="px-8 py-4 border border-gray-400 text-lg font-extrabold rounded-lg hover:bg-gray-100 transition-shadow shadow-md cursor-pointer"
          >
            See Our Work
          </router-link>

          <router-link
              to="/contact"
              class="px-8 py-4 bg-[#01B8C6] text-white text-lg font-extrabold rounded-lg hover:bg-[#00a9b6] transition-shadow shadow-md cursor-pointer"
          >
            Let’s Talk
          </router-link>
        </div>

        <div class="h-10"></div>
    </div>
    <div class="h-10"></div>

    <!-- Hero Image -->
    <div class="mt-16 mx-auto max-w-3xl px-4">
      <img
          src="@/assets/ai-team.jpg"
          alt="AI team"
          class="rounded-2xl w-full object-cover shadow-lg"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('.animated-cube', {
    rotate: 360,
    repeat: -1,
    duration: 10,
    ease: 'linear'
  })
})
</script>
