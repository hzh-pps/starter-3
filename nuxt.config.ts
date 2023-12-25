export default defineNuxtConfig({
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@pinia/nuxt"],
  typescript: { strict: true, typeCheck: false },
});
