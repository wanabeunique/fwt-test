import IPaintings from '../interfaces/IPaintings';
import getPaintings from './getPaintings';
import IPages from '../interfaces/IPages';

async function getCountPaintings(
  currentPage: number,
  {
    id,
    name,
    start,
    end,
    authorId,
    locationId,
    limit = 12,
  }: Partial<IPaintings> = {},
): Promise<IPages> {
  const nextPage = await getPaintings({
    id,
    name,
    page: currentPage + 1,
    start,
    end,
    authorId,
    locationId,
    limit,
  });
  const secondPage = await getPaintings({
    id,
    name,
    page: currentPage + 2,
    start,
    end,
    authorId,
    locationId,
    limit,
  });
  return {
    next: nextPage.length > 0,
    second: secondPage.length > 0,
  };
}

export default getCountPaintings;
