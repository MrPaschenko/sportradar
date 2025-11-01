import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SportsModule } from './sports/sports.module';
import { TeamsModule } from './teams/teams.module';
import { VenuesModule } from './venues/venues.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EventsModule,
    SportsModule,
    TeamsModule,
    VenuesModule,
    DatabaseModule,
  ],
})
export class AppModule {}
