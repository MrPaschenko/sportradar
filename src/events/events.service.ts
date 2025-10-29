import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/events/create-event.dto';
import { UpdateEventDto } from '../dto/events/update-event.dto';

@Injectable()
export class EventsService {
  getAllEvents(): [] {
    return [];
  }

  createEvent(createEventDto: CreateEventDto): string {
    return `Event ${createEventDto.home_team_id} - ${createEventDto.guest_team_id} created`;
  }

  getEventById(id: string): string {
    return `Event with ID: ${id}`;
  }

  updateEventById(id: string, updateEventDto: UpdateEventDto): string {
    return `Event with ID: ${id} updated:\n${JSON.stringify(updateEventDto)}`;
  }

  deleteEventById(id: string): string {
    return `Event with ID: ${id} deleted`;
  }
}
