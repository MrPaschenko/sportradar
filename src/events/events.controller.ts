import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from '../dto/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getAllEvents(): [] {
    return this.eventsService.getAllEvents();
  }

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createEvent(createEventDto);
  }

  @Get(':id')
  getEventById(@Param() params: { id: string }) {
    return this.eventsService.getEventById(params.id);
  }

  @Put(':id')
  updateEventById(@Param() params: { id: string }) {
    return this.eventsService.updateEventById(params.id);
  }

  @Delete(':id')
  deleteEventById(@Param() params: { id: string }) {
    return this.eventsService.deleteEventById(params.id);
  }
}
