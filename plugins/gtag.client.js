export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Google Tag Manager
    const gtagScript = document.createElement('script');
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-DSL1ZNB2N2";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const gtagInlineScript = document.createElement('script');
    gtagInlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DSL1ZNB2N2');
    `;
    document.head.appendChild(gtagInlineScript);
  }
});