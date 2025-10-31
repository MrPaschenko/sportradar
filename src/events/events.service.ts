import { Inject, Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/events/create-event.dto';
import { UpdateEventDto } from '../dto/events/update-event.dto';
import { DATABASE_CONNECTION } from '../database/database-connection';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';

@Injectable()
export class EventsService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getAllEvents() {
    return this.database.query.events.findMany();
  }

  async createEvent(createEventDto: CreateEventDto) {
    console.log('Creating event with data:', createEventDto);
    try {
      await this.database.insert(schema.events).values(createEventDto);
    } catch (error) {
      return `Error creating event: ${error}`;
    }

    return `Event ${createEventDto.homeTeamId} - ${createEventDto.guestTeamId} created`;
  }

  async getEventById(id: string) {
    return this.database.query.events.findFirst({
      where: eq(schema.events.id, id),
    });
  }

  async updateEventById(id: string, updateEventDto: UpdateEventDto) {
    await this.database
      .update(schema.events)
      .set(updateEventDto)
      .where(eq(schema.events.id, id))
      .returning();

    return `Event with ID: ${id} updated`;
  }

  async deleteEventById(id: string) {
    await this.database
      .delete(schema.events)
      .where(eq(schema.events.id, id))
      .returning();

    return `Event with ID: ${id} deleted`;
  }
}
