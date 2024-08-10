import type {
  AssetsResponse,
  BooksResponse,
  PublicationsResponse,
  PublishersResponse,
  ReleasesResponse,
  TitleCoversResponse,
  TitlesResponse,
} from "@/types/pb";

export type MetadataImages = {
  "160w": string;
  "320w": string;
  "480w": string;
  "640w": string;
  "1280w": string;
  "1920w": string;
};

export type MetadataCommon = {
  images: MetadataImages | MetadataImages[];
};

export type BooksCommon = BooksResponse<
  unknown,
  {
    publication: PublicationsResponse<
      unknown,
      {
        release: ReleasesResponse<{
          publisher: PublishersResponse;
          partner?: PublishersResponse;
          title: TitlesResponse;
        }>;
        defaultBook?: BooksResponse<
          unknown,
          {
            assets_via_book?: AssetsResponse<MetadataImages>[];
          }
        >;
      }
    >;
    assets_via_book?: AssetsResponse<MetadataImages>[];
  }
>;

export type TitleCoversCommon = TitleCoversResponse<
  string[],
  MetadataCommon,
  string,
  string,
  number
>;
