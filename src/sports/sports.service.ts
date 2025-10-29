import { Injectable } from '@nestjs/common';
import { CreateSportDto } from '../dto/create-sport.dto';

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

  updateSportById(id: string): string {
    return `Sport with ID: ${id} updated`;
  }

  deleteSportById(id: string): string {
    return `Sport with ID: ${id} deleted`;
  }
}
