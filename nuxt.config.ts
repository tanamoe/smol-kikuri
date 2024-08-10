// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL,
      pocketbaseUrl: process.env.POCKETBASE_URL,
      ogUrl: process.env.OG_URL,
      imageUrl: process.env.IMAGE_URL,
      umamiUrl: process.env.UMAMI_URL,
      umamiSiteId: process.env.UMAMI_SITE_ID,
    },
  },

  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/ui",
  ],

  // https://nuxt.com/docs/getting-started/installation#prerequisites
  typescript: {
    strict: true,
    shim: false,
    typeCheck: true,
  },

  routeRules: {
    "/": { prerender: true, isr: 3600 },
  },

  image: {
    provider: "imagor",
    providers: {
      imagor: {
        provider: "~/providers/imagor",
        options: {
          baseURL: "https://image.tana.moe/unsafe",
        },
      },
      pocketbase: {
        provider: "~/providers/pocketbase",
        options: {
          baseURL: "https://pb.tana.moe/api/files",
        },
      },
    },
  },

  googleFonts: {
    families: {
      Inter: [400, 700],
      Montserrat: [700, 900],
    },
  },

  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "vi",
        icon: "🇻🇳",
        iso: "vi-VN",
        name: "Tiếng Việt",
        file: "vi-VN.json",
      },
    ],
    langDir: "locales",
    defaultLocale: "vi",
  },

  compatibilityDate: "2024-08-11",
});
