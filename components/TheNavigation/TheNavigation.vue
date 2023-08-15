<template>
  <nav class="top-0 z-30 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto flex items-center justify-between px-6 py-3">
      <div class="flex items-center justify-start gap-3">
        <div class="block lg:hidden">
          <TheNavigationSidebar />
        </div>
        <div class="flex items-center justify-center gap-3">
          <ULink to="https://truyenbanquyen.com/">
            <img src="/truyenbanquyen.png" class="h-10" />
          </ULink>
          <UIcon
            class="text-2xl text-gray-500"
            name="i-fluent-divider-tall-20-filled"
          />
          <ULink to="https://tana.moe/">
            <img src="/tana.svg" class="h-6" />
          </ULink>
        </div>
      </div>

      <div class="col-span-4 hidden items-center justify-center gap-3 lg:flex">
        <ULink
          class="font-montserrat rounded-lg font-bold text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200"
          to="https://truyenbanquyen.com/"
        >
          {{ $t("general.home") }}
        </ULink>
        <ULink
          class="font-montserrat rounded-lg font-bold text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200"
          to="https://truyenbanquyen.com/wiki/"
        >
          {{ $t("general.wiki") }}
        </ULink>
        <ULink
          class="font-xl rounded-lg text-gray-600 transition-all hover:text-[#1877f2] dark:text-gray-400 dark:hover:text-[#1877f2]"
          to="https://fb.com/truyenbanquyen/"
        >
          <UIcon class="block text-xl" name="i-simple-icons-facebook" />
        </ULink>
        <ULink
          class="font-xl rounded-lg text-gray-600 transition-all hover:text-[#ff0000] dark:text-gray-400 dark:hover:text-[#ff0000]"
          to="https://www.youtube.com/c/truyenbanquyen"
        >
          <UIcon class="block text-xl" name="i-simple-icons-youtube" />
        </ULink>
        <ULink
          class="rounded-lg text-gray-600 transition-all hover:text-black dark:text-gray-400 dark:hover:text-white"
          to="https://tiktok.com/@mi.manga.life"
        >
          <UIcon class="block text-xl" name="i-simple-icons-tiktok" />
        </ULink>
      </div>
    </div>
  </nav>
</template>
