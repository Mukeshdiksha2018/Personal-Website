<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="menu-button"
            aria-controls="mobile-menu"
            :aria-expanded="isMobileMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg
              v-if="!isMobileMenuOpen"
              class="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!-- Icon when menu is open -->
            <svg
              v-if="isMobileMenuOpen"
              class="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/">
              <img
                class="h-8 w-auto hover:scale-110 transform transition duration-300"
                src="../static/MukeshCodesLogo.svg"
                alt="Your Company"
              />
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <NuxtLink
                to="/home"
                class="text-black hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Home</NuxtLink
              >
              <NuxtLink
                to="/about"
                class="text-black hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >About</NuxtLink
              >
              <NuxtLink
                to="/experience"
                class="text-black hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Experience/Education</NuxtLink
              >
              <NuxtLink
                to="/projects"
                class="text-black hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Projects</NuxtLink
              >
              <NuxtLink
                to="/contact"
                class="text-black hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Contact</NuxtLink
              >
              <NuxtLink
                to="/admin"
                class="text-black hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >Admin Area</NuxtLink
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="relative ml-3">
            <NuxtLink to="/">
              <img
                class="h-8 w-8 rounded-full border-2 border-purple-700 hover:scale-150 transform transition duration-300"
                src="../assets/images/mukeshphoto.jpg"
                alt="Mukesh's Photo"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      class="sm:hidden"
      id="mobile-menu"
      :class="isMobileMenuOpen ? 'block' : 'hidden'"
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <NuxtLink
          to="/home"
          @click="toggleMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-purple-700 hover:text-white transition duration-300"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/about"
          @click="toggleMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-purple-700 hover:text-white transition duration-300"
          >About</NuxtLink
        >
        <NuxtLink
          to="/experience"
          @click="toggleMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-purple-700 hover:text-white transition duration-300"
          >Experience | Education</NuxtLink
        >
        <NuxtLink
          to="/projects"
          @click="toggleMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-purple-700 hover:text-white transition duration-300"
          >Projects</NuxtLink
        >
        <NuxtLink
          to="/contact"
          @click="toggleMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-purple-700 hover:text-white transition duration-300"
          >Contact</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: white;
  color: black;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  outline: none;
}

.menu-button:hover,
.menu-button:active {
  background-color: rgb(238, 238, 238);
  color: black;
}

.menu-button:focus {
  box-shadow: 0 0 0 2px white inset;
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
