<template>
  <div class="h-10"></div>
  <section
      class="relative  bg-white bg-[url('@/assets/grid-bg.svg')] bg-cover bg-center overflow-hidden
      flex flex-col items-center justify-center text-center"
  >

    <!-- Centered Text Content -->
    <div class="h-10"></div>
    <div class="text-center font-figtree leading-tight tracking-[-0.02em] text-2xl sm:text-4xl md:text-5xl">
      <h2 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-4">Who are We?</h2>
      <div class="h-10"></div>
      <div class="text-center text-[#374151] font-[400] text-base sm:text-xl leading-[28px] sm:leading-[32px] tracking-[0.05em] font-sans max-w-5xl w-full mx-auto space-y-4 px-4">
        <p>At ATOM, we are builders of intelligent, future-ready solutions.</p>
        <div class="h-10"></div>
        <p>
          We’re a multidisciplinary team of AI engineers, software developers, designers, and project managers dedicated to helping businesses thrive in the digital age. Whether it's developing our own innovative AI products or partnering with clients to build theirs, we bring deep technical expertise, strategic thinking, and creative problem-solving to every project.
        </p>
      </div>

    </div>
    <div class="h-50"></div>
    <!-- Rotating Atom Icon -->
    <div class="absolute bottom-2 right-2 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-90">
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
