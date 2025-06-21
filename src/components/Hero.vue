<template>
  <div class="h-10"></div>
  <section class="relative  min-h-[600px] md:min-h-[900px] lg:min-h-[1132px] px-4 sm:px-8 md:px-16 bg-[#F2FDFF] pt-12 md:pt-20 pb-12 md:pb-20 gap-4 rounded-3xl md:rounded-[6rem] border-2 border-dashed flex flex-col items-center justify-center text-center">


  <!-- Top-right animation -->
   

    <div class="text-center max-w-3xl mx-auto">
      <!-- Heading -->
      <div class="h-5"></div>
      <div class="text-center font-figtree leading-tight tracking-[-0.02em] text-2xl sm:text-4xl md:text-6xl">
        <h1>
          <span class="font-normal text-gray-800">From</span>
          <span class="font-bold text-[#01B8C6]"> Bold Ideas </span>
          <span class="font-normal text-gray-800">to</span>
        </h1>
        <h1 class="font-bold text-[#01B8C6] leading-[72px]">Industry Changing</h1>
        <h1 class="font-normal text-gray-800">Solutions.</h1>
      </div>

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
        <div class="flex gap-6 ">
          <router-link
              to="/products"
              class="w-full sm:w-[200px] h-[48px] sm:h-[60px] flex items-center justify-center rounded-[12px] bg-white text-gray-800 text-lg font-medium font-inter shadow hover:bg-gray-100 transition"
          >
            See Our Work
          </router-link>

          <router-link
              to="/contact"
              class="w-full sm:w-[200px] h-[48px] sm:h-[60px] flex items-center justify-center rounded-[12px] bg-[#01B8C6] text-white text-lg font-medium font-inter hover:bg-[#00a9b6] transition"
          >
            Let’s Talk
          </router-link>
        </div>

        <div class="h-10"></div>
    </div>
    <div class="h-10"></div>

    <!-- Hero Image -->
    <div class="w-full mt-8 sm:mt-16 mx-auto max-w-5xl px-4">
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
    duration: 8,
    ease: 'linear'
  })
})
</script>
<style>

</style>