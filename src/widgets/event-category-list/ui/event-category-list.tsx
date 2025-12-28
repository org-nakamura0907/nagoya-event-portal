import { EVENT_SITES, EventSiteLink, genres } from '@/entities';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';

const genreOrder = genres;

export const EventCategoryList = () => {
  return (
    <Accordion type="multiple" className="w-full space-y-2">
      {genreOrder.map((genre) => {
        const sitesInGenre = EVENT_SITES.filter((site) => site.genre === genre);
        if (sitesInGenre.length === 0) return null;

        return (
          <AccordionItem key={genre} value={genre} className="border rounded-lg px-2">
            <AccordionTrigger className="hover:no-underline font-bold text-lg">
              <div>
                {genre}
                <span className="ml-2 text-sm font-normal text-muted-foreground">({sitesInGenre.length})</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-4">
                {sitesInGenre.map((site) => (
                  <EventSiteLink key={site.id} site={site} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
