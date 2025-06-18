<template>
  <div class="h-10"></div>
  <section class="bg-white px-6 md:px-20 py-20 max-w-7xl mx-auto">
    <div class="grid md:grid-cols-2 gap-16 items-start">
      <!-- LEFT CONTENT -->
      <div>
        <div class="text-left font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
        <h3 class="text-[#1C9DB3] font-bold text-lg mb-4">Contact</h3>
        <div class="text-left font-figtree leading-[72px] tracking-[-0.02em] text-[56px]">
        <h1 class="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          We’d Love to Hear<br />From You
        </h1>
        </div>
        </div>
        <p class="text-gray-600 mb-8 max-w-md">
          We help you bring deep technical expertise, strategic thinking, and creative problem-solving to every project.
        </p>
        <div class="flex items-start gap-3">
          <span class="text-xl mt-1">✉️</span>
          <div class="text-gray-800">
            <p class="font-bold">Get in Touch</p>
            <p>atomgroup@gmail.com</p>
          </div>
        </div>
      </div>

      <!-- RIGHT FORM CONTAINER -->
      <div class="bg-[#f2f2f2] p-8 md:p-10 rounded-2xl w-full shadow-md">
       
               <!-- Right Form -->
      <form class="bg-gray-100 rounded-2xl p-0 sm:p-0 md:p-0 space-y-6 shadow-sm w-full">
        <div>
          <label class="block text-base font-semibold text-gray-800 mb-2">Your Name</label>
          <div class="bg-white rounded-xl">
            <input
              type="text"
              placeholder="Enter your full name"
              class="w-full p-4 text-gray-700 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C9DB3] text-base"
            />
          </div>
        </div>
        <div>
          <label class="block text-base font-semibold text-gray-800 mb-2">Your Email</label>
          <div class="bg-white rounded-xl">
            <input
              type="email"
              placeholder="Enter your email address"
              class="w-full p-4 text-gray-700 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C9DB3] text-base"
            />
          </div>
        </div>
        <div>
          <label class="block text-base font-semibold text-gray-800 mb-2">Your Message</label>
          <div class="bg-white rounded-xl">
            <textarea
              rows="4"
              placeholder="Enter your message to us"
              class="w-full p-4 text-gray-700 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C9DB3] text-base resize-none"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          class="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold shadow transition-all duration-300"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  </section>
</template>
