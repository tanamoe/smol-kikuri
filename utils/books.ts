import {
  Collections,
  type BooksDetailsResponse,
  type TitlesResponse,
} from "@/types/pb";

/**
 * @param count
 */
export const getRecentBooks = async (count: number) => {
  const { $pb } = useNuxtApp();
  const data = await $pb.collection(Collections.BooksDetails).getList<
    BooksDetailsResponse<{
      title: TitlesResponse;
    }>
  >(1, count, {
    sort: "-created",
    expand: "title",
  });

  return structuredClone(data).items.map((book) => ({
    ...book,
    volume: parseVolume(book.volume),
  }));
};

/**
 * @param id release ID
 */
export const getBooks = async (id: string) => {
  const { $pb } = useNuxtApp();

  const data = await $pb
    .collection(Collections.BooksDetails)
    .getFullList<BooksDetailsResponse>({
      filter: `release='${id}'`,
    });

  return structuredClone(data).map((release) => ({
    ...release,
    volume: parseVolume(release.volume),
  }));
};
