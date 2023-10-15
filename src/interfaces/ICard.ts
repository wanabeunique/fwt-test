import { ILocation } from './ILocations';
import { IAuthor } from './IAuthor';

export interface ICard {
  locationNameObject: ILocation;
  painterNameObject: IAuthor;
  created: string;
  imageUrl: string;
  name: string;
}
