<template>
     <div class="h-10"></div>
  <section class="max-w-7xl mx-auto px-4 py-20 text-center">
    <!-- Section Header -->
     <div class="flex flex-col items-center justify-center">
  <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
    <h2 class="text-4xl md:text-5xl font-medium mb-3 text-gray-900">Our Services</h2>
  </div>

  <div class="h-10"></div>

  <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
    <p class="text-gray-500 text-lg mb-12 max-w-2xl mx-auto text-center">
      Discover the range of services we provide to support you.
    </p>
  </div>
</div>

 <div class="h-10"></div>
    <!-- Cards Grid -->
    <div class="grid gap-8 sm:grid-cols-5 lg:grid-cols-3 place-items-center">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-[#F3F3F3] rounded-2xl shadow-sm max-w-sm w-full overflow-hidden flex flex-col min-h-[600px] hover:shadow-md transition-shadow duration-300"
      >
        <!-- Image -->
        <img :src="service.image" alt="Service Image" class="h-56 w-full object-cover" />
 <div class="h-3"></div>
        <!-- Text Content -->
          
        <div class="p-6 text-left space-y-4">
          <h3 class="font-grotesk font-extrabold text-[40px] leading-[24px] tracking-[0em] text-[#000000]">
            {{ service.title }}
          </h3>
           <div class="h-3"></div>
           
<ul class="list-disc pl-6 text-xl text-[#4D4D4D] font-[400] leading-[1.75rem] tracking-wider font-grotesk space-y-2">
  <li v-for="(point, i) in service.points" :key="i">
    {{ point }}
  </li>
</ul>


           <div class="h-5"></div>
           <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
             <router-link
              to="/contact"
              class="flex items-center justify-center bg-[#1AA9B9] text-[#1AA9B9]  text-lg font-medium font-inter hover:transition"
          >
            Get Started
          </router-link>
        </div>
           </div>
        </div>
      </div>
    
  </section>
</template>

<script setup>
import dataEngImg from '@/assets/Data-eng.png'
import aiAutoImg from '@/assets/Ai-auto.png'
import strategyImg from '@/assets/Strategy.png'
import softwareImg from '@/assets/Software.png'

const services = [
  {
    title: "Data Engineering & Analytics",
    image: dataEngImg,
    points: [
      "End-to-end data pipeline development (ETL/ELT).",
      "Business intelligence dashboards and reporting systems.",
      "SEO & performance analytics integration.",
      "Data modeling and warehousing.",
    ],
  },
  {
    title: "Artificial Intelligence & Automation",
    image: aiAutoImg,
    points: [
      "AI-powered chatbots and virtual assistants.",
      "Natural Language Processing (NLP) solutions.",
      "Lead generation and sales automation tools.",
      "Custom Large Language Model (LLM) integration.",
      "Predictive analytics and intelligent automation.",
    ],
  },
  {
    title: "Technical Strategy & Systems Consulting",
    image: strategyImg,
    points: [
      "AI and system architecture design.",
      "API strategy and integration planning.",
      "Cloud-native infrastructure and deployment pipelines.",
      "Ongoing technical advisory and optimization.",
    ],
  },
  {
    title: "Software & Application Development",
    image: softwareImg,
    points: [
      "Full-stack web and mobile application development.",
      "Custom backend systems and RESTful APIs.",
      "MVPs and scalable enterprise platforms.",
      "UI/UX strategy and implementation.",
    ],
  },
];
</script> 
