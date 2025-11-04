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
import { relations } from 'drizzle-orm';

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  startTime: time('start_time', {
    withTimezone: false,
  }).notNull(),
  startDate: date('start_date').notNull(),
  sportId: uuid('_sport_id')
    .notNull()
    .references(() => sports.id),
  homeTeamId: uuid('_home_team_id')
    .notNull()
    .references(() => teams.id),
  guestTeamId: uuid('_guest_team_id')
    .notNull()
    .references(() => teams.id),
  venueId: uuid('_venue_id')
    .notNull()
    .references(() => venues.id),
  // 0 Scheduled, 1 InProgress, 2 Completed, 3 Canceled
  status: smallint('status').notNull().default(0),
  homeScore: integer('home_score').default(0),
  guestScore: integer('guest_score').default(0),
});

export const eventRelations = relations(events, ({ one }) => ({
  sport: one(sports, {
    fields: [events.sportId],
    references: [sports.id],
  }),
  homeTeam: one(teams, {
    fields: [events.homeTeamId],
    references: [teams.id],
  }),
  guestTeam: one(teams, {
    fields: [events.guestTeamId],
    references: [teams.id],
  }),
  venue: one(venues, {
    fields: [events.venueId],
    references: [venues.id],
  }),
}));
