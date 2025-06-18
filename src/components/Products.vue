<template>

  <div class="h-50"></div>
  <section
      class="relative bg-[#181e23] h-[865px] px-[30px]
       rounded-[6rem] border-2 border-dashed border-[#b0c4ce] min-h-[700px]  items-center justify-center text-center"
  >
    <div class="h-30"></div>
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px] px-6 md:px-20">
        <h2 class="text-white text-6xl font-bold mb-4 md:mb-0">Products</h2>
          </div>
          <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px] px-6 md:px-20">
        <p class="text-gray-300 text-2xl max-w-4xl md:text-right">
          A showcase of the products we've brought to life — blending design, technology, and strategy to deliver real results.
        </p>
      </div>
        </div>

      <hr class="border-gray-600 mb-8" />
      <div class="h-20"></div>
      <div class="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        <!-- Product 1 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-1 min-w-[260px] max-w-xs flex flex-col relative">
          <div class="text-white text-2xl font-semibold mb-4">Handyman</div>
          <div class="relative group bg-white rounded-xl h-100 w-full mb-20 flex items-center justify-center overflow-hidden">
            <img src="@/assets/Handyman.png" alt="Handyman Product" class="object-cover w-full h-full" />
            <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl z-10"></div>
          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-lg cursor-pointer transition-all duration-300 group-hover:bg-[#00A9B7]">
              <img
                  src="@/assets/Arrow.png"
                  alt="Arrow Icon"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <!-- Blue glow animation -->
              <div
                  class="absolute inset-0 rounded-full ring-4 ring-blue-400 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"
              ></div>
            </div>

          </div>
        </div>

        <!-- Product 2 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-1 min-w-[260px] max-w-xs flex flex-col relative">
          <div class="text-white text-2xl font-semibold mb-4">Delygen Ai</div>
          <div class="relative group bg-white rounded-xl h-100 w-full mb-20 flex items-center justify-center overflow-hidden">
            <img src="@/assets/Delygen.png" alt="Delygen Product" class="object-cover w-full h-full" />
            <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl z-10"></div>
          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-lg cursor-pointer transition-all duration-300 group-hover:bg-[#00A9B7]">
              <img
                  src="@/assets/Arrow.png"
                  alt="Arrow Icon"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <!-- Blue glow animation -->
              <div
                  class="absolute inset-0 rounded-full ring-4 ring-blue-400 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"
              ></div>
            </div>

          </div>
        </div>

        <!-- Product 3 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-1 min-w-[260px] max-w-xs flex flex-col relative">
          <div class="text-white text-2xl font-semibold mb-4">Atom Group</div>
          <div class="relative group bg-white rounded-xl h-100 w-full mb-20 flex items-center justify-center overflow-hidden">
            <img src="@/assets/Atom.png" alt="ATOM Group" class="object-cover w-full h-full" />
            <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl z-10"></div>
          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-lg cursor-pointer transition-all duration-300 group-hover:bg-[#00A9B7]">
              <img
                  src="@/assets/Arrow.png"
                  alt="Arrow Icon"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <!-- Blue glow animation -->
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

<style>
</style>
