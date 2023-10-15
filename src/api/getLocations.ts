import axios from 'axios';
import { ILocation } from '../interfaces/ILocations';

async function getLocations(): Promise<ILocation[]> {
  return axios
    .get('https://test-front.framework.team/locations')
    .then((res) => res.data);
}

export default getLocations;
