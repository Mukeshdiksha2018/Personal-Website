<template>
  <section
    class="flex items-center justify-center bg-gray-100 text-gray-800 container-height px-4 sm:px-6 animate-fadeInUp"
  >
    <div class="max-w-6xl p-1 sm:p-1 md:p-1">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 text-center md:text-left mb-3 md:mb-28"
      >
        <!-- Left Column: Name -->
        <div class="animate-fadeInUp">
          <span class="text-4xl sm:text-6xl font-bold leading-tight"
            >Hi, I'm</span
          >
          <br />
          <h1
            class="text-4xl sm:text-6xl font-bold leading-tight text-purple-700"
          >
            Mukesh Kumar
          </h1>
        </div>

        <!-- Right Column: Description -->
        <h1>
          <span
            class="text-base sm:text-lg mt-4 md:mt-0 animate-fadeInUp delay-150"
          >
            A Full Stack Software Developer with
            a strong focus on React.js,Vue.js and Nuxt.js. With years of experience in
            building scalable, no-code, and document-signing platforms, I blend
            clean design with robust functionality to craft seamless web
            applications. I take pride in writing efficient, maintainable code
            and have a keen eye for UI/UX details, ensuring that every project I
            work on delivers both performance and aesthetics. Whether
            collaborating with teams or leading development initiatives, I am
            committed to delivering high-quality, scalable solutions. Beyond
            client projects, I am constantly exploring new technologies,
            refining my skills, and working on personal experiments to stay at
            the forefront of modern web development.
          </span>
        </h1>
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
useSeoMeta({
  title: 'Mukesh Kumar | Nuxt.js & Vue.js Developer | Coding Support & Full Stack Development',
  description:
    'Hire Mukesh Kumar, a Nuxt.js, Vue.js, and Node.js expert offering full stack development and coding support. Based in India, available globally for freelance and remote projects.',
  ogTitle: 'Mukesh Kumar | Nuxt.js & Vue.js Developer',
  ogDescription:
    'Full Stack Developer providing Vue, Nuxt, Node.js solutions for startups, agencies, and individuals worldwide. Coding helper and project collaborator.',
  ogImage: '/cover.jpg',
  ogUrl: 'https://mukeshcodes.in',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Mukesh Kumar | Full Stack Developer & Coding Supporter',
  twitterDescription:
    'Nuxt, Vue, Node.js expert offering freelance development and coding help. Based in India, serving global clients.',
  keywords:
    'Nuxt.js Developer, Vue.js Developer, Node.js Developer, Full Stack Developer, Coding Support, Coding Helper, Coding Supporter, India Developer, Remote Vue Developer, Hire Nuxt Developer, Nuxt Freelancer, Vue Freelance Developer, JavaScript Expert, SaaS Developer, Web App Developer, Hyderabad, Software Engineer, Frontend Developer, Backend Developer, API Developer',
})
</script>


<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease forwards;
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-450 {
  animation-delay: 500ms;
}

@media screen and (min-width: 1024px) {
  .container-height {
    height: 90vh;
  }
}

@media (max-width: 640px) {
  .button-center-mobile {
    width: fit-content;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
