<template>
  <div class="h-20"></div>
  <footer class="relative  bg-white pt-12 pb-6 px-4 md:px-12 border-t border-gray-100 overflow-hidden">
    <!-- Top section with logo and horizontal links -->
    <div class="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
      <!-- Logo + Horizontal Navigation Links -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-[#1cb5e0]">&#9673;</span>
          <img src="@/assets/Logo_Atom.png" alt="Atom Logo" class="w-8 h-8" />
          <span class="font-kufam font-extrabold text-xl text-gray-800"
           style="
    font-family: 'Kufam', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 0%;
  "
          >ATOM</span>
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
 <div class="h-10"></div>
    <!-- Divider -->
    <hr class="border-gray-200 my-8" />
 <div class="h-10"></div>
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
    <div class="h-60"></div>
    <!-- Huge faded background text -->
    <!-- Only visible on large (lg) screens and up -->
   <div class="pointer-events-none z-0 overflow-hidden absolute left-0 bottom-0 w-full h-[223px] flex items-end">
  <span
    class="text-[#E5E5E5] font-extrabold text-[18vw] tracking-tight leading-none whitespace-nowrap animate-marquee"
    style="will-change: transform;"
  >
    ATOM GROUP&nbsp;&nbsp;ATOM GROUP&nbsp;&nbsp;ATOM GROUP
  </span>
</div>

  </footer>
</template>
<style>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  display: inline-block;
  min-width: 200vw;
  animation: marquee 5s linear infinite;
  }
</style>