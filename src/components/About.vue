<!-- About.vue -->
<template>
  <div class="h-10"></div>
  <section
      class="relative w-full h-screen bg-white bg-[url('@/assets/grid-bg.svg')] bg-cover bg-center overflow-hidden
      flex flex-col items-center justify-center text-center"
  >
    <div class="h-10"></div>
    <!-- Centered Text Content -->
    <div class="flex flex-col justify-center items-center text-center h-full px-6 max-w-4xl mx-auto">
      <h2 class="text-5xl font-semibold text-gray-900 mb-4">Who are We?</h2>
      <p class="text-xl text-gray-600 mb-4">
        At ATOM, we are builders of intelligent, future-ready solutions.
      </p>
      <div class="h-10"></div>
      <p class="text-gray-600 text-lg leading-relaxed">
        We’re a multidisciplinary team of AI engineers, software developers, designers, and project managers
        dedicated to helping businesses thrive in the digital age. Whether it's developing our own innovative
        AI products or partnering with clients to build theirs, we bring deep technical expertise, strategic
        thinking, and creative problem-solving to every project.
      </p>
    </div>

    <!-- Rotating Atom Icon -->
    <div class="absolute bottom-10 right-10 w-40 h-40 opacity-90">
      <img
          src="@/assets/animated-atom.png"
          alt="AI Icon"
          class="w-full h-full animated-atom"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('.animated-atom', {
    rotate: 360,
    repeat: -1,
    duration: 12,
    ease: 'linear',
    //transformOrigin: 'center center',
  })
})
</script>
