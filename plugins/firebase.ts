import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
  };

  // Check if Firebase is already initialized
  const firebaseApp = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  return {
    provide: {
      firebase: firebaseApp,
      auth,
    },
  };
});
