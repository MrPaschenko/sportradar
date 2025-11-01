import { Inject, Injectable } from '@nestjs/common';
import { CreateVenueDto } from '../dto/venues/create-venue.dto';
import { UpdateTeamDto } from '../dto/teams/update-team.dto';
import { DATABASE_CONNECTION } from '../database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class VenuesService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getAllVenues() {
    return this.database.query.venues.findMany();
  }

  async createVenue(createVenueDto: CreateVenueDto) {
    await this.database.insert(schema.venues).values(createVenueDto);

    return `Venue ${createVenueDto.name} created`;
  }

  async getVenueById(id: string) {
    return this.database.query.venues.findFirst({
      where: eq(schema.venues.id, id),
    });
  }

  async updateVenueById(id: string, updateTeamDto: UpdateTeamDto) {
    await this.database
      .update(schema.venues)
      .set(updateTeamDto)
      .where(eq(schema.venues.id, id));

    return `Venue with ID: ${id} updated:\n${JSON.stringify(updateTeamDto)}`;
  }

  async deleteVenueById(id: string) {
    await this.database.delete(schema.venues).where(eq(schema.venues.id, id));

    return `Venue with ID: ${id} deleted`;
  }
}
