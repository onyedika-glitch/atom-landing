<template>
  <div class="h-10"></div>
  <section class="w-full bg-[#181e23] py-48 px-2 md:px-8 rounded-3xl border-2 border-dashed border-[#b0c4ce] min-h-[1000px]">

  <div class="h-10"></div>
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 class="text-white text-6xl font-bold mb-4 md:mb-0">Products</h2>
        <p class="text-gray-300 text-2xl max-w-4xl md:text-right">
        A showcase of the products we've brought to life — blending design, technology, and strategy to deliver real results.
        </p>
      </div>
      <div class="h-10"></div>
      <hr class="border-gray-600 mb-8" />
      <div class="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        <!-- Product 1 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-1 min-w-[260px] max-w-xs flex flex-col relative">
          <div class="text-white text-2xl font-semibold mb-4">Handyman</div>
          <div class="bg-white rounded-xl h-150 w-full mb-20 flex items-center justify-center overflow-hidden">
            <!-- Placeholder for product image -->
            <div class="bg-white rounded-xl h-200 w-full mb-20 flex items-center justify-center overflow-hidden">
              <img src="@/assets/handyman.png" alt="Handyman Product" class="object-cover w-full h-full" />
            </div>

          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer">
              &#8599;
            </div>
          </div>
        </div>
        <!-- Product 2 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-1 min-w-[260px] max-w-xs flex flex-col relative">
          <div class="text-white text-2xl font-semibold mb-4">Delygen Ai</div>
          <div class="bg-white rounded-xl h-150 w-full mb-20 flex items-center justify-center overflow-hidden">
            <!-- Placeholder for product image -->
            <div class="bg-white rounded-xl h-200 w-full mb-20 flex items-center justify-center overflow-hidden">
              <img src="@/assets/Delygen.png" alt="Delygen Product" class="object-cover w-full h-full" />
            </div>

          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer">
              &#8599;
            </div>
          </div>
        </div>
        <!-- Product 3 -->
        <div class="bg-[#23282f] rounded-2xl p-4 flex-1 min-w-[260px] max-w-xs flex flex-col relative">
          <div class="text-white text-2xl font-semibold mb-4">Atom Group</div>
          <div class="bg-white rounded-xl h-150 w-full mb-20 flex items-center justify-center overflow-hidden">
            <!-- Placeholder for product image -->
            <div class="bg-white rounded-xl h-200 w-full mb-20 flex items-center justify-center overflow-hidden">
              <img src="@/assets/ATOM.png" alt="ATOM Group" class="object-cover w-full h-full" />
            </div>

          </div>
          <div class="absolute bottom-4 right-4">
            <div class="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white text-3xl shadow-lg cursor-pointer">
              &#8599;
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