<template>
  <section
    class="flex items-center justify-center bg-gray-100 text-gray-800 container-height px-4 sm:px-6"
  >
    <div class="max-w-6xl p-1 sm:p-1 md:p-1">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 text-center md:text-left mb-3 md:mb-28"
      >
        <!-- Left Column: Name -->
        <div class="animate-fadeInUp">
          <h1 class="text-4xl sm:text-6xl font-bold leading-tight">
            Hi, I'm <br>Mukesh Kumar</br>
          </h1>
        </div>

        <!-- Right Column: Description -->
        <div>
          <p
            class="text-base sm:text-lg mt-4 md:mt-0 animate-fadeInUp delay-150"
          >
            I am a
            <span class="font-semibold text-teal-500"
              >Full Stack Developer</span
            >
            specializing in building scalable web applications with modern
            technologies, including
            <span class="font-semibold text-teal-500"> Nuxt</span>,
            <span class="font-semibold text-teal-500"> Vue</span>,
            <span class="font-semibold text-teal-500"> React</span>,
            <span class="font-semibold text-teal-500"> Redux</span>,
            <span class="font-semibold text-teal-500"> Pinia</span>,
            <span class="font-semibold text-teal-500"> JavaScript</span>,
            <span class="font-semibold text-teal-500"> Node.js</span>,
            <span class="font-semibold text-teal-500"> MongoDB</span>, and
            <span class="font-semibold text-teal-500"> Firebase</span>. I also
            have expertise in
            <span class="font-semibold text-teal-500">
              Power BI development</span
            >, serving as a
            <span class="font-semibold text-teal-500"> Power BI Architect</span>
            and
            <span class="font-semibold text-teal-500">
              Business Intelligence Manager</span
            >.
          </p>
          <p class="text-base sm:text-lg mt-4 animate-fadeInUp delay-300">
            Based in
            <span class="font-semibold text-teal-500">Hyderabad, India</span>, I
            am passionate about transforming data into actionable insights and
            delivering high-quality software solutions.
          </p>
        </div>
      </div>

      <div
        class="mt-1 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp delay-450"
      >
        <NuxtLink
          class="button-center-mobile px-6 py-3 text-lg font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-900 transition duration-300 transform hover:scale-105"
          to="/Contact"
        >
          Get in Touch
        </NuxtLink>
        <NuxtLink
          class="button-center-mobile px-6 py-3 text-lg font-semibold text-white bg-slate-500 rounded-lg hover:bg-slate-700 transition duration-300 transform hover:scale-105"
          to="/Projects"
        >
          Projects
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Mukesh Kumar | Full Stack Developer | Home",
  meta: [
    {
      name: "description",
      content:
        "Full Stack Developer specializing in scalable web applications with expertise in Nuxt, Vue, React, Node.js, Power BI, and more. Based in Hyderabad, India.",
    },
    {
      name: "keywords",
      content:
        "Full Stack Developer, Mukesh Kumar, Nuxt, Vue, React, Node.js, Power BI, Hyderabad, India, web development, software solutions",
    },
    { property: "og:title", content: "Mukesh Kumar | Full Stack Developer" },
    {
      property: "og:description",
      content:
        "Full Stack Developer specializing in Nuxt, Vue, React, Node.js, Power BI, and more. Based in Hyderabad, India.",
    },
    { property: "og:image", content: "/path-to-image.jpg" },
    { property: "og:url", content: "https://yourwebsite.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Mukesh Kumar | Full Stack Developer" },
    {
      name: "twitter:description",
      content:
        "Full Stack Developer specializing in Nuxt, Vue, React, Node.js, Power BI, and more. Based in Hyderabad, India.",
    },
    { name: "twitter:image", content: "/path-to-image.jpg" },
  ],
});
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease forwards;
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-450 {
  animation-delay: 450ms;
}

.container-height {
  height: 90vh;
}

@media (max-width: 640px) {
  .button-center-mobile {
    width: fit-content;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
