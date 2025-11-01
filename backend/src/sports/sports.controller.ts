import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SportsService } from './sports.service';
import { CreateSportDto } from '../dto/sports/create-sport.dto';
import { UpdateSportDto } from '../dto/sports/update-sport.dto';

@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Get()
  async getAllSports() {
    return this.sportsService.getAllSports();
  }

  @Post()
  async createSport(@Body() createSportDto: CreateSportDto) {
    return this.sportsService.createSport(createSportDto);
  }

  @Get(':id')
  async getSportById(@Param() params: { id: string }) {
    return this.sportsService.getSportById(params.id);
  }

  @Patch(':id')
  async updateSportById(
    @Param() params: { id: string },
    @Body() updateSportDto: UpdateSportDto,
  ) {
    return this.sportsService.updateSportById(params.id, updateSportDto);
  }

  @Delete(':id')
  async deleteSportById(@Param() params: { id: string }) {
    return this.sportsService.deleteSportById(params.id);
  }
}
