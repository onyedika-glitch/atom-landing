<template>
     <div class="h-10"></div>
  <section class="max-w-7xl mx-auto px-4 py-20 text-center">
    <!-- Section Header -->
     <div class="flex flex-col items-center justify-center">
 
    <h2
  class="mb-3"
  style="
    font-family: 'Figtree', sans-serif;
    font-weight: 300;
    font-size: 56px;           /* or your display-xl size */
    line-height: 72px;
    letter-spacing: -2%;
    text-align: center;
    color: #1D2B34;
    border-radius: 12px;
    padding: 8px 24px;
    display: inline-block;
  "
>
  Our Services
</h2>


  

 
    <p
  style="
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 400;
    font-size: 20px;          
    line-height: 28px;         
    letter-spacing: 0.05em;   
    text-align: center;
    color: #6A767D;
    margin-bottom: 3rem;
    max-width: 52rem;
    margin-left: auto;
    margin-right: auto;
  "
>
  Discover the range of services we provide to support you.
</p>
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
          <h3
  style="
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #000000;
    border-radius: 8px;
    padding: 8px 16px;
    display: inline-block;
  "
>
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
  class="flex items-center justify-center rounded-xl"
  style="
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: center;
    color: #1AA9B9;
    padding: 12px 0;
    width: 100%;
    min-height: 56px;
  "
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
