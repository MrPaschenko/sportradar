import { Inject, Injectable } from '@nestjs/common';
import { CreateSportDto } from '../dto/sports/create-sport.dto';
import { UpdateSportDto } from '../dto/sports/update-sport.dto';
import { DATABASE_CONNECTION } from '../database/database-connection';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';

@Injectable()
export class SportsService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getAllSports() {
    return this.database.query.sports.findMany();
  }

  async createSport(createSportDto: CreateSportDto) {
    await this.database.insert(schema.sports).values(createSportDto);

    return `Sport ${createSportDto.name} created`;
  }

  async getSportById(id: string) {
    return this.database.query.sports.findFirst({
      where: eq(schema.sports.id, id),
    });
  }

  async updateSportById(id: string, updateSportDto: UpdateSportDto) {
    await this.database
      .update(schema.sports)
      .set(updateSportDto)
      .where(eq(schema.sports.id, id));

    return `Sport with ID: ${id} updated:\n${JSON.stringify(updateSportDto)}`;
  }

  async deleteSportById(id: string) {
    await this.database.delete(schema.sports).where(eq(schema.sports.id, id));

    return `Sport with ID: ${id} deleted`;
  }
}
