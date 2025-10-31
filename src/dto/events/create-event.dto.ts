import { EventStatus } from '../../enums/event-status.enum';

export class CreateEventDto {
  startTime: string;
  startDate: string;
  sportId: string;
  homeTeamId: string;
  guestTeamId: string;
  venueId: string;
  status?: EventStatus;
  homeScore?: number;
  guestScore?: number;
}
