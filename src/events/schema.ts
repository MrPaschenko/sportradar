import {
  pgTable,
  uuid,
  integer,
  smallint,
  time,
  date,
} from 'drizzle-orm/pg-core';
import { sports } from '../sports/schema';
import { teams } from '../teams/schema';
import { venues } from '../venues/schema';

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  startTime: time('start_time', {
    withTimezone: false,
  }).notNull(),
  startDate: date('start_date').notNull(),
  sportId: uuid('sport_id')
    .notNull()
    .references(() => sports.id),
  homeTeamId: uuid('home_team_id')
    .notNull()
    .references(() => teams.id),
  guestTeamId: uuid('guest_team_id')
    .notNull()
    .references(() => teams.id),
  venueId: uuid('venue_id')
    .notNull()
    .references(() => venues.id),
  // 0 Scheduled, 1 InProgress, 2 Completed, 3 Canceled
  status: smallint('status').notNull().default(0),
  homeScore: integer('home_score').default(0),
  guestScore: integer('guest_score').default(0),
});
