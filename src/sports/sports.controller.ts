import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SportsService } from './sports.service';
import { CreateSportDto } from '../dto/create-sport.dto';

@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Get()
  getAllSports() {
    return this.sportsService.getAllSports();
  }

  @Post()
  createSport(@Body() createSportDto: CreateSportDto) {
    return this.sportsService.createSport(createSportDto);
  }

  @Get(':id')
  getSportById(@Param() params: { id: string }) {
    return this.sportsService.getSportById(params.id);
  }

  @Put(':id')
  updateSportById(@Param() params: { id: string }) {
    return this.sportsService.updateSportById(params.id);
  }

  @Delete(':id')
  deleteSportById(@Param() params: { id: string }) {
    return this.sportsService.deleteSportById(params.id);
  }
}
