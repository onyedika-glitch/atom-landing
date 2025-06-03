<template>
  <div class="flex justify-between items-center p-4 sticky top-0 bg-white z-50">
    <!-- Logo and Brand Name -->
    <div class="flex items-center gap-2">
      <img src="@/assets/logo.png" alt="Atom Logo" class="w-8 h-8" />
      <span class="text-xl font-semibold">Atom</span>
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
