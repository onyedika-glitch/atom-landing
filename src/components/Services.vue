<template>
  <section class="w-full min-h-screen bg-white px-4 py-16 flex flex-col items-center justify-center text-center">
    <div class="max-w-7xl mx-auto text-left mb-16">
      <h4 class="text-[#01B8C6] font-bold text-[24px] leading-[1.5] tracking-[0] font-['Space_Grotesk']">
        Services
      </h4>

      <div class="text-left font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
      <h2 class="text-4xl font-extrbold text-gray-900 mt-2">What We DO</h2>

      <div class="text-left text-[#374151] font-[400] text-xl leading-[32px] tracking-[0.05em] font-sans max-w-5xl mx-auto space-y-4">
      <p>
        At ATOM, we deliver cutting-edge, enterprise-grade technology services designed to meet the evolving needs of modern businesses and institutions.
      </p>
    </div>
      </div>
      </div>

    <div class="overflow-x-auto">
      <div class="flex gap-6 w-max px-4 animate-slide">
        <div
            v-for="(card, index) in services"
            :key="index"
            class="group relative w-[20rem] h-[25rem] rounded-[3rem] p-6 overflow-hidden text-white cursor-pointer transition-all duration-500"
            :class="card.bg"
        >

          <!-- Front Content -->
          <div class="absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-500 group-hover:opacity-0">

            <!-- Icon top-right -->
            <img :src="card.icon" alt="service icon" class="absolute top-6 right-6 w-10 h-10" />

            <!-- Title and Description -->
            <div>
              <div class="h-10"></div>
              <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[40px]">
              <h3
                  class="text-left font-figtree font-[300] text-[40px] leading-[1.25] tracking-[-0.02em] text-white mb-2"
                  v-html="card.title"
              />
</div>


              <div class="h-5"></div>
              <p
                  class="text-left font-figtree font-normal text-[16px] leading-[1.5] tracking-tight text-white mb-4 max-w-[260px] break-words line-clamp-4"
              >
                {{ card.description }}
              </p>

            </div>

            <!-- ATOM Label -->
            <p class="text-white font-bold uppercase text-sm mt-4">
              ATOM
            </p>
          </div>



          <!-- Back Content (fade in on hover) -->
          <div class="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <!-- Top Section -->
            <div>
              <div class="h-10"></div>
              <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[40px]">
              <h3 class="text-4xl font-bold mb-6">Services</h3>
              <div class="h-10"></div>
              <!-- Service List with Custom SVG Bullets -->
                <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[40px]">
              <ul class="flex flex-col gap-6 text-left  font-figtree leading-[72px] tracking-[-0.02em] text-[40px]">

                <li v-for="(item, idx) in card.backContent" :key="idx" class="flex items-start gap-4">
                  <!-- Custom SVG icon -->
                  <span class="min-w-[24px] min-h-[24px]">
          <svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="white" stroke-width="2"/>
            <circle cx="12" cy="12" r="4" fill="white"/>
          </svg>
        </span>
                  <span class="text-white text-base leading-snug">{{ item }}</span>
                </li>
              </ul>
            </div>
                </div>
              <div class="h-5"></div>
              <!-- Bottom CTA Section -->
              <div class="mt-16 flex flex-col items-center space-y-2">
                <!-- GET STARTED Button -->
                <router-link
                    to="/contact"
                    class="w-[180px] h-[60px] flex items-center justify-center rounded-[12px] bg-white/60 text-[#414651] text-lg font-semibold tracking-wide font-body"
                >
                  GET STARTED
                </router-link>

                <!-- ATOM Text -->
                <p class="text-sm font-extrabold uppercase text-white tracking-wide">
                  ATOM
                </p>
              </div>
</div>
            </div>

              <!-- Animated Cube SVG -->
          <div class="absolute top-6 right-6 z-0 w-36 h-36 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <img src="@/assets/Cube.png" alt="Cube" class="w-full h-full animated-cube" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import iconAI from '@/assets/service Icons-5.svg'
import iconData from '@/assets/service Icons-2.svg'
import iconSoftware from '@/assets/service Icons.svg'
import iconConsulting from '@/assets/service Icons-3.svg'
import iconAutomation from '@/assets/service Icons-4.svg'


const services = ref([
  {
    title: 'AI & <br/> Data Science',
    description: 'We build intelligent <br /> solutions that drive efficiency and  innovation across industries.',
    bg: 'bg-[#1D2B34]',
    icon: iconAI,
    backContent: [
      'AI-powered chatbots and virtual assistant',
      'Natural Language Processing (NLP) solutions',
      'Custom Large Language Model (LLM) integrations'
    ]
  },
  {
    title: 'Data<br/> Engineering & <br/> Analytics',
    description: 'We enable data-driven decision-making by transforming  raw data into  actionable intelligence.',
    bg: 'bg-[#DA6361]',
    icon: iconData,
    backContent: [
        'End-to-end data pipeline development (ETL/ELT)kkk',
        'Business intelligence dashboard systems',
        'SEO & performance analytics integration'
    ]
  },
  {
    title: 'Software & <br/>   Application <br/>  Development',
    description: 'We engineer robust digital solutions with a focus on  reliability, performance, and  user experience.',
    bg: 'bg-[#9747FF]',
    icon: iconSoftware,
    backContent: [
        'Full-stack web and mobile application development',
        'Custom backend systems and RESTFUL APIs',
        'MVPs and scalable enterprise platforms'
    ]
  },
  {
    title: 'Technical <br/> Strategy & <br/> Systems <br/> Consulting',
    description: 'We work with companies to design, optimize, and scale their digital infrastructure.',
    bg: 'bg-[#1AA9B9]',
    icon: iconConsulting,
    backContent: [
        'AI and system architecture design',
        'API strategy and integration planning',
        'Cloud-native infrastructure and deployment pipeline'
    ]
  },
  {
    title: 'Artificial <br/>  Intelligence <br/> Automation',
    description: 'We build intelligent systems that drive efficiency  and  innovation across industries.',
    bg: 'bg-[#1D2B34]',
    icon: iconAutomation,
    backContent: [
        'AI-powered chatbots and virtual assistants',
        'Natural Language Processing (NLP) solutions',
        'Custom Large Language Model (LLM) integration'
    ]
  }
])

onMounted(() => {
  gsap.to('.group:hover .animated-cube', {
    rotate: 360,
    repeat: -1,
    duration: 10,
    ease: 'linear'
  })
})
</script>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25%);
  }
}
.animate-slide {
  animation: slide 30s linear infinite;
}
</style>
