<template>
  <div class="h-10"></div>
  <section class="relative mx-auto bg-white px-6 md:px-20 py-40 overflow-hidden">
    <!-- Huge Background Title -->
    <div class="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-full overflow-hidden pointer-events-none">
      <span class="block text-[#E1F6F8] font-bold text-[20vw] leading-none whitespace-nowrap select-none text-center">
        Contact
      </span>
    </div>
    <div class="h-80"></div>
    <!-- Actual Foreground Content -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-32 max-w-7xl mx-auto">
      <!-- Left Side -->
      <div class="flex flex-col justify-between">
        <div class="text-center font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
        <div>
          <h2 class="text-5xl md:text-6xl font-extrabold text-[#1D1B20] mb-10 text-left">
            Leave us a message
          </h2>
        </div>
          <div class="h-5"></div>
        <div>
          <p class="text-[#00A9B7] text-lg font-semibold text-left">Follow Us</p>
        </div>
      </div>
        </div>
      <!-- Right Side Form -->
      <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <!-- Name -->
        <div>
          <label class="block font-bold mb-2 text-base">Name</label>
          <input
              v-model="form.name"
              type="text"
              required
              class="w-full border-none focus:outline-none text-base"
          />
          <hr class="border-t-2 border-gray-800 mt-1" />
        </div>

        <!-- Company -->
        <div>
          <label class="block font-bold mb-2 text-base">Company</label>
          <input
              v-model="form.company"
              type="text"
              class="w-full border-none focus:outline-none text-base"
          />
          <hr class="border-t-2 border-gray-800 mt-1" />
        </div>

        <!-- Email -->
        <div>
          <label class="block font-bold mb-2 text-base">Email</label>
          <input
              v-model="form.email"
              type="email"
              required
              class="w-full border-none focus:outline-none text-base"
          />
          <hr class="border-t-2 border-gray-800 mt-1" />
        </div>

        <!-- Phone -->
        <div>
          <label class="block font-bold mb-2 text-base">Phone</label>
          <input
              v-model="form.phone"
              type="text"
              class="w-full border-none focus:outline-none text-base"
          />
          <hr class="border-t-2 border-gray-800 mt-1" />
        </div>

        <!-- Message (Full Width) -->
        <div class="md:col-span-2">
          <label class="block font-bold mb-2 text-base">Write your message to us</label>
          <textarea
              v-model="form.message"
              rows="4"
              required
              class="w-full border-none focus:outline-none resize-none text-base"
          ></textarea>
          <hr class="border-t-2 border-gray-800 mt-1" />
        </div>

        <!-- Send Button -->
        <div class="md:col-span-2 flex justify-end">
          <button
              type="submit"
              class="bg-[#00A9B7] hover:bg-[#0095a0] text-white px-10 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Send
          </button>
        </div>
      </form>
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
