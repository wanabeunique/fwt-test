import axios from 'axios';
import IPaintings from '../interfaces/IPaintings';
import { ICard } from '../interfaces/ICard';

export default async function getPaintings({
  id,
  name,
  page = 1,
  limit = 12,
  start,
  end,
  authorId,
  locationId,
}: Partial<IPaintings> = {}): Promise<ICard[]> {
  const searchLine = `https://test-front.framework.team/paintings?${
    id ? `id=${id}&` : ''
  }${name ? `q=${name}&` : ''}${page ? `_page=${page}&` : ''}${
    limit ? `_limit=${limit}&` : ''
  }${start ? `created_gte=${start}&` : ''}${end ? `created_lte=${end}&` : ''}${
    authorId ? `authorId=${authorId}&` : ''
  }${locationId ? `locationId=${locationId}` : ''}`;
  return axios.get(searchLine).then((res) => res.data);
}
