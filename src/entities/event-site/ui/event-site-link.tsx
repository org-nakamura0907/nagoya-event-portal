import type { EventSite } from '../model';

import { Button } from '@/shared/ui/button';
import Link from 'next/link';

type Props = {
  site: EventSite;
};

export const EventSiteLink = ({ site }: Props) => {
  return (
    <Button variant="link" asChild>
      <Link href={site.makeSearchUrl()} target="_blank" rel="noopener noreferrer">
        {site.title}で探す
      </Link>
    </Button>
  );
};
