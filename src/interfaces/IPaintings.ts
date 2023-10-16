export default interface IPaintings {
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
