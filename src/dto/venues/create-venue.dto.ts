export class CreateVenueDto {
  name: string;
  capacity: number;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
  websiteUrl?: string;
}
