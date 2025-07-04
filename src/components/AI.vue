<template>
  <div class="h-20"></div>
  <section class="relative bg-white py-16 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center">
    <div class="h-10"></div>
    <!-- Centered, Bold Heading -->
    <div class="w-full text-center mb-24 px-4">
      <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
        <h2 class="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          The World of Artificial <br /> Intelligence
        </h2>
      </div>
    </div>
    <div class="h-10"></div>
    <!-- Absolute Left-Aligned Atom -->
   <div
  class="flex justify-center mb-6 md:mb-0 md:absolute md:left-8 md:top-8 md:z-10"
>
      <img
        src="@/assets/animated-atom.png"
        alt="AI Illustration"
        class="w-[120px] md:w-[200px] animate-spin-slow"
      />
    </div>
    <div class="h-10"></div>
    <!-- Cards Area -->
    <div class="w-full flex flex-col items-center gap-6 md:gap-0 md:block md:w-1/2 md:h-[650px] relative">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="[
          'card z-20 mx-auto md:mx-0',
          // On desktop, use absolute and custom position; on mobile, static and centered
          'w-[90vw] max-w-xs min-w-[220px] md:w-auto md:max-w-none md:min-w-0',
          'mb-4 md:mb-0',
          index < 4 ? '' : '',
          'md:absolute',
          card.position
        ]"
      >
        <div class="w-20 h-10 mb-3" v-html="card.icon" />
        <p class="card-text">{{ card.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

import mlIcon from '@/assets/Layer_1.svg?raw'
import dataIcon from '@/assets/Layer_2.svg?raw'
import smartphoneIcon from '@/assets/Layer_5.svg?raw'
import customIcon from '@/assets/Layer_3.svg?raw'
import industryIcon from '@/assets/Layer_4.svg?raw'

const atomRef = ref(null)
onMounted(() => {
  gsap.to(atomRef.value, {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'linear',
    transformOrigin: '50% 50%',
  })
})

const cards = [
  {
    icon: mlIcon,
    text: 'Machine learning allows AI systems to improve over time — just like we learn from experience.',
    position: 'md:top-0 md:left-[150px]'
  },
  {
    icon: dataIcon,
    text: 'AI analyzes huge amounts of data in seconds, helping businesses make faster, smarter decisions.',
    position: 'md:top-[80px] md:left-[360px]'
  },
  {
    icon: smartphoneIcon,
    text: 'From your smartphone keyboard to Netflix recommendations — AI is behind many tools you use daily.',
    position: 'md:top-[220px] md:left-0'
  },
  {
    icon: customIcon,
    text: 'AI isn’t one-size-fits-all — businesses can build tailored models that solve their specific challenges.',
    position: 'md:top-[220px] md:left-[420px]'
  },
  {
    icon: industryIcon,
    text: 'AI is revolutionizing healthcare, finance, education, agriculture, and beyond.',
    position: 'md:top-[350px] md:left-[210px]'
  }
]
</script>

<style scoped>
.card {
  background: white;
  padding: 18px;
  border-radius: 18px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card-text {
  font-size: 0.92rem;
  color: #444;
  line-height: 1.5;
}

/* Desktop card sizes */
@media (min-width: 768px) {
  .card:nth-child(1) { width: 200px; height: 200px; }
  .card:nth-child(2) { width: 400px; height: 120px; }
  .card:nth-child(3) { width: 400px; height: 125px; }
  .card:nth-child(4) { width: 200px; height: 200px; }
  .card:nth-child(5) { width: 200px; height: 200px; }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>
