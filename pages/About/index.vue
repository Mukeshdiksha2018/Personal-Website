<template>
  <section
    class="w-full py-4 px-4 md:px-20 lg:px-32 bg-gray-100 animate-fadeInUp container-height"
  >
    <div
      class="sticky bottom-0 bg-white dark:bg-gray-800 py-4 text-center mb-7 animate-fadeInUp delay-150"
    >
      <span
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200"
      >
        About Me
      </span>
    </div>

    <div
      class="overflow-y-auto max-h-[57vh] space-y-8 text-gray-700 dark:text-gray-300 mb-9 animate-fadeInUp delay-300"
    >
      <!-- Introduction -->
      <p>
        Hi, I’m Akkala Sai Mukesh Kumar, a Full Stack Developer passionate about
        building high-quality, user-centric applications that blend performance,
        scalability, and intuitive design. Based in Hyderabad, India, I
        specialize in <span class="highlight">Vue</span>,
        <span class="highlight">Nuxt</span>,
        <span class="highlight">React</span>,
        <span class="highlight">Node.js</span>, and modern JavaScript
        frameworks, crafting cutting-edge solutions for businesses worldwide.
      </p>

      <!-- Specializations Section -->
      <div>
        <span class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          What I Do..
        </span>
        <h1>
          <ul class="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong class="highlight">Full Stack Web Development:</strong>
              I develop responsive, dynamic, and scalable web applications using
              frameworks like Vue, Nuxt, React, and Node.js. Whether it’s a
              sleek front-end UI or a robust back-end API, I focus on delivering
              seamless experiences.
            </li>
            <li>
              <strong class="highlight"
                >Business Intelligence & Data Analytics:</strong
              >
              I help businesses transform raw data into meaningful insights with
              Power BI and interactive dashboards, driving better
              decision-making.
            </li>
            <li>
              <strong class="highlight"
                >Scalable Solutions Architecture:</strong
              >
              From small startups to growing enterprises, I build modular,
              future-proof architectures that scale with evolving business
              needs.
            </li>
          </ul>
        </h1>
      </div>

      <!-- Freelance & Consulting Section -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Freelance & Consulting Services
        </h2>
        <p class="mt-4 mb-1">
          As a freelance developer and consultant, I collaborate with startups,
          businesses, and individuals to bring their ideas to life. Whether it’s
          building custom web apps, optimizing existing projects, or offering
          technical guidance, I’m here to help!
        </p>
        <p>Let’s connect and build something amazing together.</p>
      </div>
    </div>

    <div
      class="sticky bottom-0 bg-gray-100 dark:bg-gray-800 py-1 text-center animate-fadeInUp delay-450"
    >
      <NuxtLink
        to="/contact"
        class="px-5 py-2 text-lg font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-900 transition duration-300 transform hover:scale-105"
      >
        Get in Touch
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
  useSeoMeta({
    title: "About Akkala Sai Mukesh Kumar | Full Stack Developer & Nuxt.js Expert",
    description:
      "Discover the background, skills, and expertise of Akkala Sai Mukesh Kumar — a Full Stack Developer specializing in Vue, Nuxt, React, Node.js, and Power BI. Providing freelance and consulting services worldwide.",
    keywords:
      "Akkala Sai Mukesh Kumar, About Mukesh Kumar, Full Stack Developer, Vue Developer, Nuxt Developer, Node.js Consultant, Power BI Expert, Freelance Developer, Web App Development, Remote Software Engineer, Hyderabad Developer, SaaS Architect, Data Analytics, Business Intelligence, JavaScript Developer, Custom Web Development, UI/UX Developer, API Development, India, Global Freelance Developer",
    ogTitle: "About Akkala Sai Mukesh Kumar | Full Stack Developer & Nuxt.js Expert",
    ogDescription:
      "Meet Mukesh Kumar, a passionate Full Stack Developer offering services in Nuxt, Vue, Node.js, React, and Power BI. Based in Hyderabad, India — open to projects worldwide.",
    ogType: "website",
    ogUrl: "https://mukeshcodes.in/about",
    ogImage: "/path-to-your-profile-or-banner.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "About Mukesh Kumar | Full Stack Developer",
    twitterDescription:
      "Full Stack Developer with expertise in Nuxt.js, Vue.js, Node.js, and Power BI. Learn more about Mukesh Kumar and his freelance consulting services.",
    twitterImage: "/path-to-your-profile-or-banner.jpg",
  });
</script>

<style scoped>
@import "tailwindcss/tailwind.css";

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

.highlight {
  color: #14b8a6;
}

.container-height {
  height: 90vh;
}
</style>
