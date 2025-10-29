import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../dto/teams/create-team.dto';
import { UpdateTeamDto } from '../dto/teams/update-team.dto';

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

  updateTeamById(id: string, updateTeamDto: UpdateTeamDto): string {
    return `Team with ID: ${id} updated:\n${JSON.stringify(updateTeamDto)}`;
  }

  deleteTeamById(id: string): string {
    return `Team with ID: ${id} deleted`;
  }
}
