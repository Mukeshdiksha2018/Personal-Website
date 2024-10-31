<template>
  <section
    class="py-4 px-4 md:px-20 lg:px-32 max-w-screen-lg mx-auto bg-gray-100 animate-fadeIn"
  >
    <div class="text-center mb-6">
      <h1
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200"
      >
        About Me
      </h1>
      <p class="mt-2 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
        Hi, I’m Akkala Sai Mukesh Kumar, and I specialize in crafting modern,
        scalable web applications.
      </p>
    </div>

    <div
      class="overflow-y-auto max-h-[70vh] space-y-8 text-gray-700 dark:text-gray-300"
    >
      <!-- Introduction -->
      <p>
        I am a Full Stack Developer with a passion for building high-quality,
        user-centered applications using the latest front-end and back-end
        technologies, including Nuxt, Vue, React, Redux, Pinia, JavaScript,
        Node.js, MongoDB, and Firebase. I’m based in Hyderabad, India, and
        dedicated to transforming data into actionable insights.
      </p>

      <!-- Specializations Section -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Specializations:
        </h2>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li>
            <strong>Full Stack Web Development:</strong> Building responsive,
            dynamic applications using modern JavaScript frameworks and
            libraries.
          </li>
          <li>
            <strong>Business Intelligence & Data Analytics:</strong>
            Implementing Power BI solutions to create actionable insights and
            interactive dashboards.
          </li>
          <li>
            <strong>Scalable Solutions Architecture:</strong> Developing robust
            systems that evolve with business needs.
          </li>
        </ul>
      </div>

      <!-- Freelance & Consulting Section -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Freelance & Consulting Services
        </h2>
        <p class="mt-4">
          I offer freelance consultation services for startups, companies, and
          individuals seeking to enhance their tech infrastructure or bring
          innovative projects to life. Let’s work together to achieve your
          vision!
        </p>
      </div>
    </div>

    <!-- Sticky Get in Touch Button at the bottom of the component -->
    <div class="sticky bottom-0 bg-white dark:bg-gray-800 py-4 text-center">
      <NuxtLink
        to="/contact"
        class="inline-block px-6 py-3 text-lg font-semibold text-teal-500 bg-white rounded-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
      >
        Get in Touch
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { useHead } from "nuxt/app";

useHead({
  title: "About Mukesh Kumar - Full Stack Developer & Power BI Expert",
  meta: [
    {
      name: "description",
      content:
        "Learn about Mukesh Kumar, a Full Stack Developer specializing in Nuxt, Vue, React, Node.js, and a Power BI Architect offering freelance consultation services.",
    },
    {
      property: "og:title",
      content: "About Mukesh Kumar - Full Stack Developer & Power BI Expert",
    },
    {
      property: "og:description",
      content:
        "Mukesh Kumar specializes in modern web development and Power BI solutions. Based in Hyderabad, India, and open for freelance consultation.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>

<style scoped>
@import "tailwindcss/tailwind.css";

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
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
