<template>
  <footer class="relative w-full bg-white pt-12 pb-6 px-4 md:px-12 border-t border-gray-100 overflow-hidden">
    <!-- Top section with logo and horizontal links -->
    <div class="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
      <!-- Logo + Horizontal Navigation Links -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-[#1cb5e0]">&#9673;</span>
          <img src="@/assets/Logo_Atom.png" alt="Atom Logo" class="w-8 h-8" />
          <span class="font-extrabold text-xl text-gray-800">ATOM</span>
        </div>
        <nav class="flex flex-wrap gap-6 text-gray-700 text-base">
          <a href="/hero" class="hover:underline">Overview</a>
          <a href="/products" class="hover:underline">Products</a>
          <a href="/services" class="hover:underline">Services</a>
          <a href="/contact" class="hover:underline">Contact Us</a>
          <a href="/help" class="hover:underline">Help</a>
          <a href="/privacy" class="hover:underline">Privacy</a>
        </nav>
      </div>

      <!-- Optional right section for future content -->
      <div></div>
    </div>

    <!-- Divider -->
    <hr class="border-gray-200 my-8" />

    <!-- Bottom Row -->
    <div class="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
      <!-- Left copyright -->
      <div>© 2025 Atom. All rights reserved.</div>
      <!-- Right legal links -->
      <div class="flex gap-6">
        <a href="/terms" class="hover:underline">Terms</a>
        <a href="/privacy" class="hover:underline">Privacy</a>
        <a href="/cookies" class="hover:underline">Cookies</a>
      </div>
    </div>
    <div class="h-30"></div>
    <!-- Huge faded background text -->
    <div class="absolute left-0 bottom-0 w-full overflow-hidden select-none pointer-events-none">
      <span class="text-[3rem] md:text-[7rem] font-extrabold text-[#eaf6fa] tracking-tight whitespace-nowrap leading-none">
        ATOM GROUP
      </span>
    </div>
  </footer>
</template>
