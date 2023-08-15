<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <UButton
    icon="i-fluent-line-horizontal-3-20-filled"
    color="gray"
    square
    variant="ghost"
    @click="isOpen = true"
  />
  <USlideover v-model="isOpen" side="left">
    <div class="p-6">
      <div class="mb-6 flex items-center justify-between">
        <NuxtLink to="/">
          <img src="/truyenbanquyen.png" class="h-12" />
        </NuxtLink>

        <UButton
          icon="i-fluent-dismiss-20-filled"
          color="gray"
          square
          variant="ghost"
          @click="isOpen = false"
        />
      </div>
      <ul class="font-montserrat mt-12 space-y-2 text-2xl font-bold">
        <li>
          <NuxtLink to="https://truyenbanquyen.com">
            {{ $t("general.home") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://truyenbanquyen.com/wiki/">
            {{ $t("general.wiki") }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </USlideover>
</template>

<style scoped>
/* TODO: might need changes later */
.router-link-active {
  @apply text-tanablue-500;
}
</style>
