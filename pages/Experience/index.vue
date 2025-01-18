<template>
  <div class="profile-section">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Work Experience -->
      <div class="card">
        <h3 class="text-center text-purple-700 text-lg font-bold mb-4">
          Work Experience
        </h3>
        <div class="space-y-4">
          <div
            v-for="(job, index) in workExperience"
            :key="index"
            class="timeline-item border-l-4 pl-4"
            :style="{ animationDelay: `${index * 0.3}s` }"
          >
            <p class="text-sm text-gray-500">{{ job.period }}</p>
            <h4 class="text-base font-semibold">{{ job.company }}</h4>
            <p class="text-gray-700">{{ job.position }}</p>
            <p class="text-gray-600">{{ job.description }}</p>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="card">
        <h3 class="text-center text-purple-700 text-lg font-bold mb-4">
          Education
        </h3>
        <div class="space-y-4">
          <div
            v-for="(education, index) in educationHistory"
            :key="index"
            class="timeline-item border-l-4 pl-4"
            :style="{ animationDelay: `${index * 0.3}s` }"
          >
            <p class="text-sm text-gray-500">{{ education.period }}</p>
            <h4 class="text-base font-semibold">{{ education.institution }}</h4>
            <p class="text-gray-700">{{ education.degree }}</p>
            <p class="text-gray-600" v-if="education.details">
              {{ education.details }}
            </p>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="card">
        <h3 class="text-center text-purple-700 text-lg font-bold mb-4">
          Skills
        </h3>
        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="(skill, index) in skills"
            :key="index"
            class="skill-tag bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-1 rounded"
            :style="{ animationDelay: `${index * 0.3}s` }"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workExperience: [
        {
          company: 'Hallmark Global Technologies PVT LTD',
          position: 'Software Engineer',
          period: 'Nov 2021 - Currently working..',
          description:
            'Developing a no-code platform and document signing system using Vue.js and Nuxt.js. My responsibilities include actively participating in code reviews, debugging and developing new functionalities.',
        },
        {
          company: 'Lavu INC',
          position: 'Configuration & On-boarding Executive',
          period: 'Jan 2020 - Nov 2021',
          description:
            'Worked on configuration and onboarding clients for this restaurant POS service provider',
        },
        {
          company: 'Genpact',
          position: 'Collections Executive',
          period: 'Nov 2018 - Aug 2019',
          description:
            'Did credit card collections for Synchrony, which is a leading financial institution in USA',
        },
        {
          company: 'Concentrix',
          position: 'Customer Service Representative',
          period: 'Mar 2017 - May 2018',
          description: 'Worked here as a customer service executive.',
        },
      ],
      educationHistory: [
        {
          institution: 'Manipal University Jaipur',
          degree: 'Bachelor of Computer Applications',
          period: '2021 - 2024',
          details: 'Specialized in web development and software engineering.',
        },
        {
          institution: 'Narayana Junior College',
          degree: 'Maths, Physics & Chemistry',
          period: '2010 - 2012',
        },
      ],
      skills: [
        'Vue.js',
        'Nuxt.js',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Axios',
      ],
    };
  },
};
</script>

<style scoped>
.profile-section {
  margin: 20px;
}

/* Card styling */
.card {
  @apply bg-white p-6 rounded-lg shadow-md;
  animation: fadeIn 1s ease-in-out forwards;
}

/* Timeline Item Animation */
.timeline-item {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

/* Skills Tag Animation */
.skill-tag {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

/* Keyframes for Mounting Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

h3 {
  font-weight: bold;
}

@media (max-width: 768px) {
  .profile-section {
    margin: 10px;
  }
}
</style>
