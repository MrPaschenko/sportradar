export class CreateVenueDto {
  name: string;
  capacity: number;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
  website_url?: string;
}
