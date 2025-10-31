import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from '../dto/events/create-event.dto';
import { UpdateEventDto } from '../dto/events/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getAllEvents() {
    return this.eventsService.getAllEvents();
  }

  @Post()
  async createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createEvent(createEventDto);
  }

  @Get(':id')
  async getEventById(@Param() params: { id: string }) {
    return this.eventsService.getEventById(params.id);
  }

  @Patch(':id')
  async updateEventById(
    @Param() params: { id: string },
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventsService.updateEventById(params.id, updateEventDto);
  }

  @Delete(':id')
  async deleteEventById(@Param() params: { id: string }) {
    return this.eventsService.deleteEventById(params.id);
  }
}
