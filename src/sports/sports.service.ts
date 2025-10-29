import { Injectable } from '@nestjs/common';
import { CreateSportDto } from '../dto/create-sport.dto';
import { UpdateSportDto } from '../dto/update-sport.dto';

@Injectable()
export class SportsService {
  getAllSports(): string {
    return 'All sports';
  }

  createSport(createSportDto: CreateSportDto): string {
    return `Sport ${createSportDto.name} created`;
  }

  getSportById(id: string): string {
    return `Sport with ID: ${id}`;
  }

  updateSportById(id: string, updateSportDto: UpdateSportDto): string {
    return `Sport with ID: ${id} updated:\n${JSON.stringify(updateSportDto)}`;
  }

  deleteSportById(id: string): string {
    return `Sport with ID: ${id} deleted`;
  }
}
