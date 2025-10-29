import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SportsModule } from './sports/sports.module';
import { TeamsModule } from './teams/teams.module';
import { VenuesModule } from './venues/venues.module';

@Module({
  imports: [EventsModule, SportsModule, TeamsModule, VenuesModule],
})
export class AppModule {}
