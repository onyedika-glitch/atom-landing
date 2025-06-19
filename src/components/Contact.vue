<template>
  <div class="h-10"></div>
  <section class="relative  bg-white px-6 md:px-20 py-40 overflow-hidden px-4">
    <!-- Huge Background Title -->
    <div class="block absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-full overflow-hidden pointer-events-none">
       <span
    class="block select-none"
    style="
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 250px;
      line-height: 220px;
      letter-spacing: 0%;
      text-align: center;
      color: #E1F6F8;
      width: 100vw;
      white-space: nowrap;
    "
  >
    Contact
  </span>
</div>
    <div class="h-80"></div>
    <!-- Actual Foreground Content -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 max-w-7xl mx-auto">
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
     
      <form 
  action="https://formsubmit.co/atom.ai.grp@gmail.com"
  method="POST"
  class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-2xl mx-auto px-4"
>
  <!-- Name -->
  <div>
    <label class="block font-bold mb-2 text-base">Name</label>
    <input
      type="text"
      name="name"
      required
      class="w-full border-none focus:outline-none text-base"
    />
    <hr class="border-t-2 border-gray-800 mt-1" />
  </div>

  <!-- Company -->
  <div>
    <label class="block font-bold mb-2 text-base">Company</label>
    <input
      type="text"
      name="company"
      class="w-full border-none focus:outline-none text-base"
    />
    <hr class="border-t-2 border-gray-800 mt-1" />
  </div>

  <!-- Email -->
  <div>
    <label class="block font-bold mb-2 text-base">Email</label>
    <input
      type="email"
      name="email"
      required
      class="w-full border-none focus:outline-none text-base"
    />
    <hr class="border-t-2 border-gray-800 mt-1" />
  </div>

  <!-- Phone -->
  <div>
    <label class="block font-bold mb-2 text-base">Phone</label>
    <input
      type="text"
      name="phone"
      class="w-full border-none focus:outline-none text-base"
    />
    <hr class="border-t-2 border-gray-800 mt-1" />
  </div>

  <!-- Message (Full Width) -->
  <div class="md:col-span-2">
    <label class="block font-bold mb-2 text-base">Write your message to us</label>
    <textarea
      name="message"
      rows="4"
      required
      class="w-full border-none focus:outline-none resize-none text-base"
    ></textarea>
    <hr class="border-t-2 border-gray-800 mt-1" />
  </div>

  <!-- Hidden settings for FormSubmit -->
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  <!-- Send Button -->
  <div class="md:col-span-2 flex justify-end">
    <button
  type="submit"
  class="w-full md:w-[167px] text-white text-lg font-medium transition-colors"
  style="
    height:44px;
    gap:8px;
    border-width:2px;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:32px;
    padding-right:32px;
    border-radius:12px;
    background:#1AA9B9;
    border-color:#1AA9B9;
  "
>
  Send
</button>
  </div>
</form>
    </div>
  </section>
</template>


<script setup>

</script>

<style scoped>
</style>
