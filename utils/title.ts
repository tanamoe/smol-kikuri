import {
  type BaseSystemFields,
  type BooksDetailsResponse,
  Collections,
  type FormatsResponse,
  type TitlesResponse,
} from "@/types/pb";

export const getTitle = async (id: string) => {
  const { $pb } = useNuxtApp();

  const data = await $pb.collection(Collections.Titles).getOne<
    TitlesResponse<{
      format: FormatsResponse;
    }>
  >(id, {
    expand: "format",
  });

  return structuredClone(data);
};

export const getTitleCoverImages = async (id: string) => {
  const { $pb } = useNuxtApp();

  const images: (Pick<BaseSystemFields, "id" | "collectionId"> & {
    cover: string[];
  })[] = [];

  const data = await $pb
    .collection(Collections.BooksDetails)
    .getFullList<
      Pick<
        BooksDetailsResponse,
        "id" | "collectionId" | "edition" | "cover" | "baseCover"
      >
    >({
      filter: `title='${id}'`,
      fields: "id,collectionId,edition,cover,baseCover",
    });

  data.forEach(({ id, collectionId, edition, cover, baseCover }) => {
    const parsedCover = [];

    if (edition !== "" && cover.length > 0) parsedCover.push(...cover);
    else if (edition === "" && baseCover.length > 0)
      parsedCover.push(...baseCover);
    else return;

    images.push({
      id,
      collectionId,
      cover: parsedCover,
    });
  });

  return images;
};
