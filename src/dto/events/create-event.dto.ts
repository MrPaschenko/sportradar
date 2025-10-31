import { EventStatus } from '../../enums/event-status.enum';

export class CreateEventDto {
  startTime: Date;
  sportId: string;
  homeTeamId: string;
  guestTeamId: string;
  venueId: string;
  status?: EventStatus;
  homeScore?: number;
  guestScore?: number;
}
