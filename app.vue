<!-- eslint-disable import/no-named-as-default-member -->
<script setup lang="ts">
const i18nHead = useLocaleHead({
  addSeoAttributes: true,
});

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
  },
  bodyAttrs: {
    class: "dark:bg-gray-900 bg-gray-50 text-gray-700 dark:text-gray-200",
  },
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Truyện Bản Quyền` : "Truyện Bản Quyền";
  },
});

useSeoMeta({
  ogSiteName: "Truyện Bản Quyền",
  ogLocale: "vi_VN",
  ogType: "website",
  ogImageHeight: "630",
  ogImageWidth: "1200",
  themeColor: "#f8b60b",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#2684FF" />
    <NuxtPage />
  </NuxtLayout>
</template>
