import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto } from '../dto/create-venue.dto';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  getAllVenues() {
    return this.venuesService.getAllVenues();
  }

  @Post()
  createVenue(@Body() createVenueDto: CreateVenueDto) {
    return this.venuesService.createVenue(createVenueDto);
  }

  @Get(':id')
  getVenueById(@Param() params: { id: string }) {
    return this.venuesService.getVenueById(params.id);
  }

  @Put(':id')
  updateVenueById(@Param() params: { id: string }) {
    return this.venuesService.updateVenueById(params.id);
  }

  @Delete(':id')
  deleteVenueById(@Param() params: { id: string }) {
    return this.venuesService.deleteVenueById(params.id);
  }
}
