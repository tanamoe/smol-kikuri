<script setup lang="ts">
import dayjs from "dayjs";
import { joinURL } from "ufo";

import { Collections } from "@/types/pb";

import type { FilterPublishers } from "@/utils/releases";
import type { BookDetailsCommon } from "@/types/common";

const runtimeConfig = useRuntimeConfig();
const { $pb } = useNuxtApp();
const store = useSettingsStore();
const { showDigital, showEditionedBook } = storeToRefs(store);

const month = ref(dayjs.tz());
const publishers = ref<FilterPublishers[]>([]);

const filter = computed(() =>
  parseCalendarFilter(
    month.value.startOf("month").format("YYYY-MM-DD"),
    month.value.startOf("month").add({ month: 1 }).format("YYYY-MM-DD"),
    {
      publishers: publishers.value.map((publisher) => publisher.id),
      digital: showDigital.value,
      edition: showEditionedBook.value,
    },
  ),
);

const { pending, data, error } = await useAsyncData(
  () =>
    $pb.collection(Collections.BookDetails).getFullList<BookDetailsCommon>({
      filter: filter.value,
      sort: "+publishDate, -edition",
      expand: "publication, release, release.title",
      fields:
        "*, expand.publication.volume, expand.publication.name, expand.publication.digital, expand.release.title, expand.release.expand.title.name",
    }),
  {
    watch: [filter],
  },
);

const releases = computed(() => {
  if (data.value) {
    return groupBy<BookDetailsCommon>(data.value, (p) => p.publishDate);
  }

  return null;
});

const dates = computed(() => {
  if (releases.value) {
    return Object.keys(releases.value).map((date) =>
      dayjs(date).format("YYYY-MM-DD"),
    );
  } else return [];
});

useSeoMeta({
  title: "Lịch phát hành",
  ogTitle: "Lịch phát hành",
  ogImage: joinURL(runtimeConfig.public.ogUrl, "calendar"),
});
</script>

<template>
  <div>
    <PageCalendarToolbar
      v-model:month="month"
      v-model:publishers="publishers"
    />

    <PageCalendarPending v-if="pending" />

    <PageCalendarEmpty
      v-else-if="!releases || Object.keys(releases).length === 0"
    />

    <PageCalendarError v-else-if="error" :error="error" />

    <template v-else>
      <PageCalendarReleases :releases="releases" />

      <PageCalendarQuickNavigation :dates="dates" />
    </template>
  </div>
</template>
