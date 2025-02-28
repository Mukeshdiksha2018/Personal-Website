<template>
  <div
    class="flex items-center justify-center bg-gray-100 dark:bg-gray-900 container-height"
  >
    <div
      class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800 animate-fadeIn"
    >
      <h2
        class="text-3xl font-bold text-center text-gray-800 dark:text-gray-200"
      >
        Admin Login
      </h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email Field -->
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email Address
          </label>
          <input
            type="email"
            v-model="email"
            required
            placeholder="Enter your email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <!-- Password Field -->
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            v-model="password"
            required
            placeholder="Enter your password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full px-4 py-2 mt-4 font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Log In
        </button>

        <!-- Forgot Password Link -->
        <!-- <div class="text-center mt-4">
          <NuxtLink
            to="/forgot-password"
            class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 transition duration-300 ease-in-out"
          >
            Forgot Password?
          </NuxtLink>
        </div> -->
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNuxtApp } from "#app";

const email = ref("");
const password = ref("");
const router = useRouter();
const { $auth } = useNuxtApp(); // Access the injected auth instance
const errorMessage = ref("");

async function handleLogin() {
  try {
    const userCredential = await signInWithEmailAndPassword(
      $auth,
      email.value,
      password.value
    );
    console.log("User logged in:", userCredential.user);
    router.push("/AddContent"); // Redirect to a protected page
  } catch (error) {
    console.error("Login error:", error.message);
    errorMessage.value = "Invalid email or password. Please try again.";
  }
}
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

.container-height {
  height: 90vh;
}
</style>
