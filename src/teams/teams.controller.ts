import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from '../dto/teams/create-team.dto';
import { UpdateTeamDto } from '../dto/teams/update-team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async getAllTeams() {
    return this.teamsService.getAllTeams();
  }

  @Post()
  async createTeam(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.createTeam(createTeamDto);
  }

  @Get(':id')
  async getTeamById(@Param() params: { id: string }) {
    return this.teamsService.getTeamById(params.id);
  }

  @Patch(':id')
  async updateTeamById(
    @Param() params: { id: string },
    @Body() updateTeamDto: UpdateTeamDto,
  ) {
    return this.teamsService.updateTeamById(params.id, updateTeamDto);
  }

  @Delete(':id')
  async deleteTeamById(@Param() params: { id: string }) {
    return this.teamsService.deleteTeamById(params.id);
  }
}
