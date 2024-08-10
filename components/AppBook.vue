<script setup lang="ts">
import { joinURL } from "ufo";
import type { BooksCommon } from "@/types/common";

const store = useSettingsStore();

const props = defineProps<{
  book: BooksCommon;
  showButton?: boolean;
}>();

const publication = props.book.expand?.publication;
const release = publication?.expand?.release;
const title = release?.expand?.title;

const _asset = props.book.expand?.assets_via_book?.find(
  (asset) => asset.type === "0000000000cover",
);
const _default =
  props.book.expand?.publication.expand?.defaultBook?.expand?.assets_via_book?.find(
    (asset) => asset.type === "0000000000cover",
  );
const image = _asset ? _asset.resizedImage : _default?.resizedImage;

function volume(volume: number) {
  return Math.floor(volume / 10000) + (volume % 10) * 0.1;
}

const ui = {
  base: "relative overflow-hidden",
  shadow: "shadow",
  body: {
    padding: "p-0 sm:p-0",
  },
};
</script>

<template>
  <NuxtLink
    :to="title && joinURL('https://tana.moe/title/' + title.slug)"
    class="group"
  >
    <UCard :ui="ui">
      <UBadge
        v-if="release && release.digital == true"
        class="absolute right-2 top-2 z-20 text-gray-900"
        color="red"
      >
        Digital
      </UBadge>
      <UBadge
        v-else-if="book.edition"
        class="absolute right-2 top-2 z-20 text-gray-900"
        color="amber"
      >
        {{ book.edition }}
      </UBadge>

      <AppBookCover
        class="relative z-10 transition-all group-hover:brightness-90 dark:group-hover:brightness-75"
        :name="publication?.name || release?.name"
        :src="image?.['1920w']"
        :srcset="image"
        v-bind="$attrs"
      />

      <USkeleton class="absolute inset-0" />
    </UCard>

    <div v-if="store.showBookDetails" class="mt-2">
      <div
        v-if="
          publication?.volume &&
          publication.volume < 90000000 &&
          publication.volume > 0
        "
        class="space-y-1"
      >
        <div
          v-if="release"
          class="decoration-primary-400 line-clamp-4 font-montserrat text-xl decoration-[.2rem] underline-offset-[.2rem] group-hover:underline"
        >
          {{ release.name }}
        </div>
        <div class="text-gray-500 dark:text-gray-400">
          {{
            $t("general.volumeNumber", {
              volume: volume(publication.volume),
            })
          }}
        </div>
      </div>
      <div v-else-if="publication">
        <span
          class="decoration-primary-400 font-montserrat text-xl decoration-[.2rem] underline-offset-[.2rem] group-hover:underline"
        >
          {{ publication.name }}
        </span>
      </div>
    </div>

    <div v-if="store.showBookPrice && book.price" class="mt-1">
      <span class="block text-gray-500 dark:text-gray-400">
        {{ $n(book.price, "currency", "vi") }}
      </span>
    </div>
  </NuxtLink>
</template>
