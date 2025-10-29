import { EventStatus } from '../enums/event-status.enum';

export class CreateEventDto {
  start_time: Date;
  sport_id: string;
  home_team_id: string;
  guest_team_id: string;
  venue_id: string;
  status?: EventStatus;
  home_score?: number;
  guest_score?: number;
}
