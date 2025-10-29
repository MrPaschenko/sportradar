import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from '../dto/create-team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getAllTeams() {
    return this.teamsService.getAllTeams();
  }

  @Post()
  createTeam(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.createTeam(createTeamDto);
  }

  @Get(':id')
  getTeamById(@Param() params: { id: string }) {
    return this.teamsService.getTeamById(params.id);
  }

  @Put(':id')
  updateTeamById(@Param() params: { id: string }) {
    return this.teamsService.updateTeamById(params.id);
  }

  @Delete(':id')
  deleteTeamById(@Param() params: { id: string }) {
    return this.teamsService.deleteTeamById(params.id);
  }
}
