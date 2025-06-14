<template>
  <div class="h-20"></div>
  <section class="relative mx-auto  bg-white py-16 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center">
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
    <div class="absolute left-8 top-8 z-10">
      <img
          src="@/assets/animated-atom.png"
          alt="AI Illustration"
          class="w-[200px] md:w-[200px] animate-spin-slow"
      />
    </div>
    <div class="h-10"></div>
    <!-- Floating Cards Area (Right) -->
    <div class="relative w-full md:w-1/2 h-[650px]">
      <div
          v-for="(card, index) in cards"
          :key="index"
          :class="['absolute card z-20', card.position]"
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
    position: 'top-0 left-[150px]'
  },
  {
    icon: dataIcon,
    text: 'AI analyzes huge amounts of data in seconds, helping businesses make faster, smarter decisions.',
    position: 'top-[80px] left-[360px]'
  },
  {
    icon: smartphoneIcon,
    text: 'From your smartphone keyboard to Netflix recommendations — AI is behind many tools you use daily.',
    position: 'top-[220px] left-0'
  },
  {
    icon: customIcon,
    text: 'AI isn’t one-size-fits-all — businesses can build tailored models that solve their specific challenges.',
    position: 'top-[220px] left-[420px]'
  },
  {
    icon: industryIcon,
    text: 'AI is revolutionizing healthcare, finance, education, agriculture, and beyond.',
    position: 'top-[350px] left-[210px]'
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

.card:nth-child(1) {
  width: 200px;
  height: 200px;
}

.card:nth-child(2) {
  width: 400px;
  height: 120px;
}

.card:nth-child(3) {
  width: 400px;
  height: 125px;
}

.card:nth-child(4) {
  width: 200px;
  height: 200px;
}

.card:nth-child(5) {
  width: 200px;
  height: 200px;
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
  animation: spin-slow 20s linear infinite;
}
</style>
