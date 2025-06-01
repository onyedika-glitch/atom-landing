<template>
  <div class="flex justify-between items-center p-4 sticky top-0 bg-white">
    <p>Atom</p>
    <div class="flex gap-4 flex-1 items-center justify-center-safe">
      <p>About Us</p>
      <p>Services</p>
      <p>Contact Us</p>
    </div>
    <template>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </nav>
    </template>

  </div>
</template>

<script lang="ts" setup></script>

<style></style>
