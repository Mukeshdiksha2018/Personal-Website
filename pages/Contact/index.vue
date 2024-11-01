<template>
  <div class="wrapper">
    <div class="w-full max-w-2xl mx-auto">
      <div class="links-container grid grid-cols-2 gap-6 animate-fadeIn">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/sai-mukesh-kumar-akkala-8469b6200/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white shadow-md rounded-lg p-4 flex items-center justify-center transform transition-transform hover:scale-110 hover:shadow-lg animate-fadeIn"
        >
          <img
            class="h-12 w-12"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
            alt="linkedin-logo"
          />
        </a>

        <!-- Email -->
        <a
          href="mailto:mukeshdiksha2018@gmail.com"
          class="bg-white shadow-md rounded-lg p-4 flex items-center justify-center transform transition-transform hover:scale-110 hover:shadow-lg animate-fadeIn delay-150"
        >
          <img
            class="h-14 w-18"
            src="~/assets/images/email-142.png"
            alt="email-logo"
          />
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/Mukeshdiksha2018"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white shadow-md rounded-lg p-4 flex items-center justify-center transform transition-transform hover:scale-110 hover:shadow-lg animate-fadeIn delay-300"
        >
          <img
            class="h-12 w-12"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github-logo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10% 25%;
}

.links-container {
  margin-top: 20px;
}

/* Fade In Animation */
@keyframes fadeIn {
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

.animate-fadeIn {
  animation: fadeIn 1.5s ease forwards;
}

.delay-150 {
  animation-delay: 250ms;
}

.delay-300 {
  animation-delay: 350ms;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .links-container {
    grid-template-columns: 1fr;
  }
}
</style>
