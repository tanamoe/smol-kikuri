<script setup lang="ts">
import { storeToRefs } from "pinia";
import { joinURL } from "ufo";

import { useSettingsStore } from "@/stores/settings";
import type { BookDetailedResponse, TitleResponse } from "@/types/pb";

const store = useSettingsStore();

const { showBookDetails, showBookPrice } = storeToRefs(store);

defineProps<{
  book: BookDetailedResponse<{
    title: TitleResponse;
  }>;
  sizes?: string;
}>();
</script>

<template>
  <AppCard>
    <UBadge
      v-if="book.digital == true"
      class="absolute right-2 top-2 backdrop-blur"
      color="red"
      variant="overlay"
    >
      Digital
    </UBadge>
    <UBadge
      v-else-if="book.edition !== ''"
      class="absolute right-2 top-2 backdrop-blur"
      color="amber"
      variant="overlay"
    >
      {{ book.edition }}
    </UBadge>
    <AppCover
      :book="book"
      :file-name="book.cover[0] || book.baseCover[0]"
      :sizes="sizes"
    />
  </AppCard>
  <div v-if="showBookDetails" class="mt-2">
    <div v-if="book.volume < 9000 && book.volume > 0" class="space-y-1">
      <ULink
        v-if="book.expand"
        :to="joinURL('https://tana.moe/title/', book.expand.title.id)"
        class="font-montserrat text-lg font-bold decoration-tbqblue-400 decoration-4 underline-offset-4 hover:underline md:text-xl"
      >
        {{ book.expand.title.name }}
      </ULink>
      <div class="text-gray-500 dark:text-gray-400">
        {{ $t("general.volumeNumber", { volume: book.volume }) }}
      </div>
    </div>
    <div v-else>
      <ULink
        :to="joinURL('https://tana.moe/title/', book.expand?.title.id || '')"
        class="font-montserrat block text-lg font-bold md:text-xl"
      >
        {{ book.name }}
      </ULink>
    </div>
  </div>
  <div v-if="showBookPrice" :class="showBookDetails ? 'mt-1' : 'mt-2'">
    <span class="block text-gray-500 dark:text-gray-400">
      {{ $n(book.price, "currency", "vi") }}
    </span>
  </div>
</template>
