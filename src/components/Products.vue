<template>
  <div class="h-40"></div>
  <section
    class="relative bg-[#181e23] min-h-[800px] px-4 sm:px-8 md:px-16 py-12 sm:py-20 rounded-3xl md:rounded-[6rem] border-2 border-dashed border-[#b0c4ce] flex flex-col items-center justify-center text-center"
  >
    <div class="h-8"></div>
    <div class="max-w-6xl mx-auto w-full">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div class="text-center md:text-left font-figtree leading-tight tracking-[-0.02em] text-2xl sm:text-4xl md:text-6xl px-2 md:px-8">
          <h2 class="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-0">Products</h2>
        </div>
        <div class="text-center md:text-right font-figtree leading-tight tracking-[-0.02em] text-lg sm:text-2xl px-2 md:px-8">
          <p class="text-gray-300 max-w-2xl mx-auto">
            A showcase of the products we've brought to life — blending design, technology, and strategy to deliver real results.
          </p>
        </div>
      </div>

      <hr class="border-gray-600 mb-8" />
      <div class="h-8"></div>

      <!-- Responsive horizontal scroll on mobile, grid on desktop -->
      <div class="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible w-full pb-4 snap-x snap-mandatory">
        <!-- Product 1 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-shrink-0 min-w-[90vw] md:min-w-0 md:w-auto flex flex-col relative snap-center">
          <div class="text-white text-2xl font-semibold mb-4">Handyman</div>
          <div class="relative group bg-white rounded-xl h-120 w-full mb-10 flex items-center justify-center overflow-hidden">
            <img src="@/assets/Handyman.png" alt="Handyman Product" class="object-cover w-full h-full" />
            <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl z-10"></div>
          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-lg cursor-pointer transition-all duration-300 group-hover:bg-[#00A9B7] relative">
              <img
                src="@/assets/Arrow.png"
                alt="Arrow Icon"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 rounded-full ring-4 ring-blue-400 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"
              ></div>
            </div>
          </div>
        </div>

        <!-- Product 2 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-shrink-0 min-w-[90vw] md:min-w-0 md:w-auto flex flex-col relative snap-center">
          <div class="text-white text-2xl font-semibold mb-4">Delygen Ai</div>
          <div class="relative group bg-white rounded-xl h-120 w-full mb-10 flex items-center justify-center overflow-hidden">
            <img src="@/assets/Delygen.png" alt="Delygen Product" class="object-cover w-full h-full" />
            <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl z-10"></div>
          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-lg cursor-pointer transition-all duration-300 group-hover:bg-[#00A9B7] relative">
              <img
                src="@/assets/Arrow.png"
                alt="Arrow Icon"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 rounded-full ring-4 ring-blue-400 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"
              ></div>
            </div>
          </div>
        </div>

        <!-- Product 3 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-shrink-0 min-w-[90vw] md:min-w-0 md:w-auto flex flex-col relative snap-center">
          <div class="text-white text-2xl font-semibold mb-4">Atom Group</div>
          <div class="relative group bg-white rounded-xl h-120 w-full mb-10 flex items-center justify-center overflow-hidden">
            <img src="@/assets/Atom.png" alt="ATOM Group" class="object-cover w-full h-full" />
            <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl z-10"></div>
          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-lg cursor-pointer transition-all duration-300 group-hover:bg-[#00A9B7] relative">
              <img
                src="@/assets/Arrow.png"
                alt="Arrow Icon"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 rounded-full ring-4 ring-blue-400 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script logic needed for static products section
</script>

<style scoped>
/* Hide scrollbar for a cleaner look on mobile */
::-webkit-scrollbar {
  display: none;
}
</style>
