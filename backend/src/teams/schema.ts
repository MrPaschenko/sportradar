import { pgTable, uuid, text } from 'drizzle-orm/pg-core';
import { sports } from '../sports/schema';
import { relations } from 'drizzle-orm';

export const teams = pgTable('teams', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  shortName: text('short_name').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  sportId: uuid('_sport_id')
    .notNull()
    .references(() => sports.id),
  websiteUrl: text('website_url'),
  logoUrl: text('logo_url'),
});

export const teamRelations = relations(teams, ({ one, many }) => ({
  sport: one(sports, {
    fields: [teams.sportId],
    references: [sports.id],
  }),
  events: many(teams),
}));
