<template>
  <section class="py-16 px-4 md:px-20 lg:px-32 max-w-screen-lg mx-auto">
    <div class="text-center mb-10 animate-fadeIn">
      <h1
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200"
      >
        Projects
      </h1>
      <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Discover some of my recent work and the projects I'm proud of. Stay
        tuned for updates!
      </p>
    </div>

    <!-- Coming Soon Notification -->
    <div class="relative overflow-hidden mt-10">
      <div
        class="flex items-center justify-center space-x-2 bg-blue-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg animate-slideUp"
      >
        <p
          class="text-xl md:text-2xl font-semibold text-blue-600 dark:text-gray-200"
        >
          Projects are on the way! Check back soon.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from "nuxt/app";

useHead({
  title: "Projects - Mukesh Kumar",
  meta: [
    {
      name: "description",
      content:
        "Browse the projects of Mukesh Kumar, a Full Stack Developer specializing in Nuxt, Vue, React, and Node.js. New projects will be available soon!",
    },
    { property: "og:title", content: "Projects - Mukesh Kumar" },
    {
      property: "og:description",
      content:
        "Explore Mukesh Kumar’s projects and recent work. Check back soon for updates on new projects.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>

<style scoped>
@import "tailwindcss/tailwind.css";

/* Fade-In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

/* Slide-Up Animation */
@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slideUp {
  animation: slideUp 0.8s ease-out forwards;
}
</style>
