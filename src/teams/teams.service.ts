import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../dto/create-team.dto';

@Injectable()
export class TeamsService {
  getAllTeams(): string {
    return 'All teams';
  }

  createTeam(createTeamDto: CreateTeamDto): string {
    return `Team ${createTeamDto.name} created`;
  }

  getTeamById(id: string): string {
    return `Team with ID: ${id}`;
  }

  updateTeamById(id: string): string {
    return `Team with ID: ${id} updated`;
  }

  deleteTeamById(id: string): string {
    return `Team with ID: ${id} deleted`;
  }
}
