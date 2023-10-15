import axios from 'axios';
import { IAuthor } from '../interfaces/IAuthor';

async function getAuthors(): Promise<IAuthor[]> {
  return axios
    .get('https://test-front.framework.team/authors')
    .then((res) => res.data);
}

export default getAuthors;
