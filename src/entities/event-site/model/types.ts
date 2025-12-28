export const genres = ['お笑い', 'スポーツ'] as const;
export type Genre = (typeof genres)[number];

export type EventSite = {
  id: string;
  title: string;
  genre: Genre;
  makeSearchUrl: () => string;
};
