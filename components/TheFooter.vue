<script setup lang="ts">
const colorMode = useColorMode();
const { t } = useI18n({ useScope: "global" });

const themes = computed(() => [
  {
    id: "dark",
    label: t("general.darkMode"),
    icon: "i-fluent-weather-moon-16-regular",
  },
  {
    id: "light",
    label: t("general.lightMode"),
    icon: "i-fluent-weather-sunny-16-regular",
  },
  {
    id: "system",
    label: t("general.systemColorMode"),
    icon: "i-fluent-desktop-16-regular",
  },
]);

const currentTheme = computed({
  get() {
    return themes.value.find((theme) => colorMode.preference === theme.id);
  },
  set(theme) {
    colorMode.preference = theme!.id;
  },
});
</script>

<template>
  <footer class="mt-12 bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto p-6">
      <div class="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div class="flex-1">
          <div class="w-fit">
            <ClientOnly>
              <USelectMenu v-model="currentTheme" :options="themes">
                <UButton
                  color="gray"
                  :icon="currentTheme?.icon"
                  trailing-icon="i-fluent-chevron-down-20-filled"
                >
                  {{ currentTheme?.label }}
                </UButton>
              </USelectMenu>
            </ClientOnly>
          </div>
        </div>
        <div class="links w-full gap-6 text-right sm:w-fit sm:gap-12">
          <ul>
            <li>
              <NuxtLink to="https://docs.tana.moe">
                {{ $t("footer.links.api") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://status.tana.moe">
                {{ $t("footer.links.status") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://via.tana.moe/discord">
                {{ $t("footer.links.contact") }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-gray-500 dark:border-gray-700"
      >
        <div>
          <ULink
            to="https://tana.moe"
            class="transition-colors hover:text-tanablue-700 dark:hover:text-tanablue-400"
          >
            {{ $t("footer.providedByTana") }}
          </ULink>
        </div>
        <div class="flex gap-3">
          <ULink
            class="font-xl rounded-lg transition-all hover:text-[#1877f2]"
            to="https://fb.com/truyenbanquyen/"
          >
            <UIcon class="block text-xl" name="i-simple-icons-facebook" />
          </ULink>
          <ULink
            class="font-xl rounded-lg transition-all hover:text-[#ff0000]"
            to="https://www.youtube.com/c/truyenbanquyen"
          >
            <UIcon class="block text-xl" name="i-simple-icons-youtube" />
          </ULink>
          <ULink
            class="rounded-lg transition-all hover:text-black dark:hover:text-white"
            to="https://tiktok.com/@mi.manga.life"
          >
            <UIcon class="block text-xl" name="i-simple-icons-tiktok" />
          </ULink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.links a {
  @apply text-gray-500 transition-colors duration-100 ease-linear hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400;
}
</style>
