import { EventSite } from './types';

export const EVENT_SITES = [
  {
    id: 'ticket.fany.lol',
    title: 'FANYチケット',
    genre: 'お笑い',
    makeSearchUrl: () => {
      return 'https://ticket.fany.lol/search/event?keywords=&from=&to=&prefectures=23&genre=0&search_type=form';
    },
  },
] as const satisfies EventSite[];
