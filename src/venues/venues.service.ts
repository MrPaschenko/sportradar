import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from '../dto/create-venue.dto';

@Injectable()
export class VenuesService {
  getAllVenues(): string {
    return 'All venues';
  }

  createVenue(createVenueDto: CreateVenueDto): string {
    return `Venue ${createVenueDto.name} created`;
  }

  getVenueById(id: string): string {
    return `Venue with ID: ${id}`;
  }

  updateVenueById(id: string): string {
    return `Venue with ID: ${id} updated`;
  }

  deleteVenueById(id: string): string {
    return `Venue with ID: ${id} deleted`;
  }
}
