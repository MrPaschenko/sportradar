import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto } from '../dto/venues/create-venue.dto';
import { UpdateVenueDto } from '../dto/venues/update-venue.dto';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  async getAllVenues() {
    return this.venuesService.getAllVenues();
  }

  @Post()
  async createVenue(@Body() createVenueDto: CreateVenueDto) {
    return this.venuesService.createVenue(createVenueDto);
  }

  @Get(':id')
  async getVenueById(@Param() params: { id: string }) {
    return this.venuesService.getVenueById(params.id);
  }

  @Patch(':id')
  async updateVenueById(
    @Param() params: { id: string },
    @Body() updateVenueDto: UpdateVenueDto,
  ) {
    return this.venuesService.updateVenueById(params.id, updateVenueDto);
  }

  @Delete(':id')
  async deleteVenueById(@Param() params: { id: string }) {
    return this.venuesService.deleteVenueById(params.id);
  }
}
