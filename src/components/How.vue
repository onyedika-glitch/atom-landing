<template>
  <div class="h-30"></div>
 <section class="px-4 sm:px-8 md:px-16 bg-white pt-12 pb-12 gap-2">
    <div class="text-center max-w-none w-full mx-0 mb-20">

      <h4 class="text-teal-600 text-lg font-normal mb-2">How We Work</h4>
      <div class="h-5"></div>
      <div class="text-center font-figtree leading-tight tracking-[-0.02em] text-2xl sm:text-4xl md:text-5xl">
  <h2 class="text-2xl sm:text-4xl md:text-6xl font-normal text-gray-800 leading-tight">
    Collaboration is at the heart of <br /> everything we do.
  </h2>
</div>
        </div>
    <div class="h-10"></div>
    <!-- Full-width Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full items-start">

      <!-- Left Column: Accordion (no margin or max-w) -->
      <div class="pl-6 pr-4 lg:pl-20 space-y-8">
        <div class="h-10"></div>
        <div v-for="item in items" :key="item.title" class="pb-6 relative border-b">
          <details class="group text-left">
            <!-- Summary Row -->
            <summary class="flex items-center text-3xl font-light text-gray-400 cursor-pointer list-none relative">
              <span>{{ item.title }}</span>
              <!-- Arrow on far right -->

              <div class="w-[90%] ml-0 relative">
  <span class="absolute right-0 top-0 pointer-events-none">
    <img src="@/assets/Cursor.png" alt="Arrow" class="w-6 h-6" />
  </span>

                <div class="h-10"></div>
                <hr class="border-t-[2px] border-gray-300 my-4" />
                <hr class="border-t-[2px] border-gray-300 my-4" />
              </div>
            </summary>
              <div class="h-10"></div>
            <!-- Content -->
            <div class="text-gray-600 text-lg space-y-6">
              <p>{{ item.description }}</p>
              <div class="h-3"></div>
              <div v-if="item.button">
                <router-link
                    to="/contact"
                    class="w-[200px] h-[60px] flex items-center justify-center rounded-[12px] bg-white text-[#1AA9B9] text-lg font-medium font-inter shadow transition"
                >
                  GET STARTED
                </router-link>
              </div>
            </div>
          </details>
        </div>
      </div>

      <!-- Right Column: Full-width Image -->
     <div class="w-full flex justify-end px-0 sm:px-4 md:px-8">
  <img
    src="@/assets/Group.png"
    alt="Team Collaboration"
    class="w-full max-w-[600px] h-auto object-cover rounded-none"
  />
</div>
    </div>
  </section>
</template>


<script setup lang="ts">
const items = [
  {
    title: "Discover",
    description: "We dig deep to understand your needs, users, and goals.",
    button: true,
  },

  {
    title: "Design",
    description: "We create intuitive interfaces and beautiful visuals aligned to your brand.",
    button: true,
  },
  {
    title: "Develop",
    description: "We build robust, scalable systems with clean code and best practices.",
    button: true,
  },
  {
    title: "Deliver",
    description: "We ensure smooth deployment and ongoing support post-launch.",
    button: true,
  },
];
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  content: none;
}

</style>
