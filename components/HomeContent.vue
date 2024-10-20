<template>
  <section
    class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
  >
    <div class="max-w-2xl p-8 text-center">
      <h1
        class="text-4xl md:text-5xl font-bold leading-tight opacity-0 translate-y-10 animate-fadeInUp"
      >
        Hi, I'm Mukesh Kumar
      </h1>
      <p
        class="mt-4 text-lg md:text-xl opacity-0 translate-y-10 animate-fadeInUp delay-150"
      >
        I am a
        <span class="font-semibold">Full Stack Developer</span> specializing in
        building scalable web applications with modern technologies, including
        <span class="font-semibold"> Nuxt</span>,
        <span class="font-semibold">Vue</span>,
        <span class="font-semibold">JavaScript</span>,
        <span class="font-semibold">Node.js</span>,
        <span class="font-semibold">MongoDB</span>, and
        <span class="font-semibold">Firebase</span>. I also have expertise in
        <span class="font-semibold">Power BI development</span>, serving as a
        <span class="font-semibold">Power BI Architect</span> and
        <span class="font-semibold"> Business Intelligence Manager</span>.
      </p>
      <p
        class="mt-4 text-lg md:text-xl opacity-0 translate-y-10 animate-fadeInUp delay-300"
      >
        Based in <span class="font-semibold">Hyderabad, India</span>, I am
        passionate about transforming data into actionable insights and
        delivering high-quality solutions.
      </p>
      <div class="mt-6">
        <a
          class="inline-block px-6 py-3 text-lg font-semibold text-blue-500 bg-white rounded-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          <NuxtLink to="/Contact">Get in Touch</NuxtLink>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
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
</style>
