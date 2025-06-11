<template>
  <div class="h-10"></div>
  <div class="flex justify-between items-center p-4 sticky top-0 bg-white z-50">
    <!-- Logo and Brand Name -->
    <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px] gap-10">
    <div class="flex items-center gap-10">

      <img src="@/assets/Logo_Atom.png" alt="Atom Logo" class="w-10 h-10 gap-10" />

      <span class="text-xl font-figtree font-extrabold">ATOM</span>
    </div>
</div>
    <!-- Navigation Text -->
    <div class="flex gap-6 items-center justify-center flex-1">
      <p>About Us</p>
      <p>Services</p>
      <p>Contact Us</p>
    </div>

    <!-- Router Links (Optional/Hidden or Use Only One Nav System) -->
    <nav class="hidden">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </nav>
  </div>
</template>
