<template>
  <div class="h-10"></div>
  <section class="relative bg-white px-6 py-64 md:px-20 lg:py-[500px] overflow-hidden">
    <!-- Huge Background Title -->
    <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
    <h1 class="absolute top-0 left-1/2 transform -translate-x-1/2 text-[800px] md:text-[600px] font-bold text-[#21B6C8] leading-none z-0 select-none">
      Contact
    </h1>
    <div class="h-40"></div>
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-32 max-w-7xl mx-auto">

      <!-- Left Texts -->
      <div class="space-y-16">
        <div class="text-left font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
        <h2 class="text-7xl md:text-8xl font-normal text-gray-900 leading-tight text-center md:text-left">
          Leave us a message
        </h2>
        <p class="text-[#00A9B7] font-extrabold text-4xl text-center md:text-left">
          Follow Us
        </p>
      </div>
        </div>

      <!-- Right Form -->
      <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <!-- Row 1 -->
        <div>
          <label class="block font-bold mb-3 text-2xl">Name</label>
          <input v-model="form.name" type="text" required class="w-full border-b border-gray-400 focus:outline-none pb-3 text-xl" />
        </div>
        <div>
          <label class="block font-bold mb-3 text-2xl">Company</label>
          <input v-model="form.company" type="text" class="w-full border-b border-gray-400 focus:outline-none pb-3 text-xl" />
        </div>

        <!-- Row 2 -->
        <div>
          <label class="block font-bold mb-3 text-2xl">Email</label>
          <input v-model="form.email" type="email" required class="w-full border-b border-gray-400 focus:outline-none pb-3 text-xl" />
        </div>
        <div>
          <label class="block font-bold mb-3 text-2xl">Phone</label>
          <input v-model="form.phone" type="text" class="w-full border-b border-gray-400 focus:outline-none pb-3 text-xl" />
        </div>

        <!-- Message Row (spans 2 columns) -->
        <div class="md:col-span-2">
          <label class="block font-bold mb-3 text-2xl">Write your message to us</label>
          <textarea v-model="form.message" required class="w-full border-b border-gray-400 focus:outline-none pb-3 resize-none text-xl" rows="4"></textarea>
        </div>

        <!-- Send Button -->
        <div class="md:col-span-2 flex justify-end mt-6">
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-md text-xl font-semibold transition-colors">
            Send
          </button>
        </div>
      </form>

    </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
})

function submitForm() {
  console.log('Form submitted:', form)
  // Example: send form data to API
  // await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(form)
  // })
  alert('Message sent!')
}
</script>

<style scoped>
</style>
