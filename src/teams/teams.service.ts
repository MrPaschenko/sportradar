import { Inject, Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../dto/teams/create-team.dto';
import { UpdateTeamDto } from '../dto/teams/update-team.dto';
import { DATABASE_CONNECTION } from '../database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class TeamsService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getAllTeams() {
    return this.database.query.teams.findMany({
      with: { sport: true },
    });
  }

  async createTeam(createTeamDto: CreateTeamDto) {
    await this.database.insert(schema.teams).values(createTeamDto);

    return `Team ${createTeamDto.name} created`;
  }

  async getTeamById(id: string) {
    return this.database.query.teams.findFirst({
      where: eq(schema.teams.id, id),
    });
  }

  async updateTeamById(id: string, updateTeamDto: UpdateTeamDto) {
    await this.database
      .update(schema.teams)
      .set(updateTeamDto)
      .where(eq(schema.teams.id, id));

    return `Team with ID: ${id} updated:\n${JSON.stringify(updateTeamDto)}`;
  }

  async deleteTeamById(id: string) {
    await this.database.delete(schema.teams).where(eq(schema.teams.id, id));

    return `Team with ID: ${id} deleted`;
  }
}
