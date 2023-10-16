export default interface IPaintings {
  created: string | undefined;
  imageUrl: string | undefined;
  id?: number;
  name?: string;
  page?: number;
  limit?: number;
  start?: string;
  end?: string;
  authorId?: number;
  locationId?: number;
}
