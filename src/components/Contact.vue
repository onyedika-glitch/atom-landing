<template>
  <div class="h-20"></div>
  <section class="relative bg-white px-6 py-64 md:px-20 lg:py-[500px] overflow-hidden">
    <!-- Huge Background Title -->
    <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">

      <div class="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-full overflow-hidden pointer-events-none">
  <span class="block text-[#21B6C8] font-extrabold text-[20vw] leading-none whitespace-nowrap select-none text-center">
    CONTACT
  </span>
      </div>
    <div class="h-80"></div>
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-32 max-w-7xl mx-auto">

      <!-- Left Texts -->
      <div class="space-y-16">
        <div class="text-left font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
        <h2 class="text-7xl md:text-8xl font-normal text-gray-900 leading-tight text-center md:text-left">
          Leave us a message
        </h2>
        <p class="text-[#00A9B7] font-normal text-4xl text-center md:text-left">
          Follow Us
        </p>
      </div>
        </div>

      <!-- Right Form -->
      <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <!-- Row 1 -->
        <div>
          <label class="block font-bold mb-3 text-2xl">Name</label>
          <input
              v-model="form.name"
              type="text"
              required
              class="w-full border-none focus:outline-none text-xl"
          />
          <hr class="border-t-4 border-gray-800 mt-1" />
        </div>
        <div>
          <label class="block font-bold mb-3 text-2xl">Company</label>
          <input
              v-model="form.company"
              type="text"
              class="w-full border-none focus:outline-none text-xl"
          />
          <hr class="border-t-4 border-gray-800 mt-1" />
        </div>

        <!-- Row 2 -->
        <div>
          <label class="block font-bold mb-3 text-2xl">Email</label>
          <input
              v-model="form.email"
              type="email"
              required
              class="w-full border-none focus:outline-none text-xl"
          />
          <hr class="border-t-4 border-gray-800 mt-1" />
        </div>
        <div>
          <label class="block font-bold mb-3 text-2xl">Phone</label>
          <input
              v-model="form.phone"
              type="text"
              class="w-full border-none focus:outline-none text-xl"
          />
          <hr class="border-t-4 border-gray-800 mt-1" />
        </div>

        <!-- Message Row (spans 2 columns) -->
        <div class="md:col-span-2">
          <label class="block font-bold mb-3 text-2xl">Write your message to us</label>
          <textarea
              v-model="form.message"
              required
              rows="4"
              class="w-full border-none focus:outline-none resize-none text-xl"
          ></textarea>
          <hr class="border-t-4 border-gray-800 mt-1" />
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
