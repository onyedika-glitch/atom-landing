<template>
  <section class="bg-white py-24 px-6 md:px-20 flex flex-col items-center justify-center text-center">
    <div class="h-10"></div>
    <div class="text-center max-w-5xl mx-auto mb-20">
      <div class="h-10"></div>
      <h4 class="text-teal-600 text-lg font-semibold mb-2">How We Work</h4>
      <div class="h-10"></div>
<div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
      <h2 class="text-4xl md:text-6xl font-normal font-[300] text-gray-800 leading-tight">
        Collaboration is at the heart of everything we do.
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
      <!-- Left: Accordion -->
      <div class="space-y-12">

        <!-- Discover -->
        <div class="border-b pb-6">
          <details open class="group text-left">
            <summary class="text-2xl font-semibold text-gray-800 cursor-pointer">Discover</summary>
            <p class="mt-4 text-gray-600">We dig deep to understand your needs, users, and goals.</p>
            <div class="h-10"></div>
            <input
                type="text"
                placeholder="Add details here..."
                class="mt-4 w-full border-none focus:outline-none text-gray-800 text-xl placeholder:text-gray-400 font-medium tracking-wide"
            />
            <hr class="border-gray-800 border-t-4 mt-1 w-full" />
            <button class="mt-4 px-5 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white transition">
              Get Started
            </button>
          </details>
        </div>

        <!-- Design -->
        <div class="border-b pb-6">
          <details class="group text-left">
            <summary class="text-2xl text-gray-400 cursor-pointer">Design</summary>
            <p class="mt-4 text-gray-600">We create intuitive interfaces and beautiful visuals aligned to your brand.</p>
            <div class="h-10"></div>
            <input
                type="text"
                placeholder="Add details here..."
                class="mt-4 w-full border-none focus:outline-none text-gray-800 text-xl placeholder:text-gray-400 font-medium tracking-wide"
            />
            <hr class="border-gray-800 border-t-4 mt-1 w-full" />
          </details>
        </div>

        <!-- Develop -->
        <div class="border-b pb-6">
          <details class="group text-left">
            <summary class="text-2xl text-gray-400 cursor-pointer">Develop</summary>
            <p class="mt-4 text-gray-600">We build robust, scalable systems with clean code and best practices.</p>
            <div class="h-10"></div>
            <input
                type="text"
                placeholder="Add details here..."
                class="mt-4 w-full border-none focus:outline-none text-gray-800 text-xl placeholder:text-gray-400 font-medium tracking-wide"
            />
            <hr class="border-gray-800 border-t-4 mt-1 w-full" />
          </details>
        </div>

        <!-- Deliver -->
        <div class="border-b pb-6">
          <details class="group text-left">
            <summary class="text-2xl text-gray-400 cursor-pointer">Deliver</summary>
            <p class="mt-4 text-gray-600">We ensure smooth deployment and ongoing support post-launch.</p>
            <div class="h-10"></div>
            <input
                type="text"
                placeholder="Add details here..."
                class="mt-4 w-full border-none focus:outline-none text-gray-800 text-xl placeholder:text-gray-400 font-medium tracking-wide"
            />
            <hr class="border-gray-800 border-t-4 mt-1 w-full" />
          </details>
        </div>

      </div>

      <!-- Right: Image -->
      <div class="flex justify-center lg:justify-end">
        <img src="@/assets/Group.png" alt="Team Collaboration" class="w-full max-w-xl rounded-3xl shadow-lg" />
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this static layout
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
</style>
