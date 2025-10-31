import { pgTable, uuid, text } from 'drizzle-orm/pg-core';
import { sports } from '../sports/schema';

export const teams = pgTable('teams', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  shortName: text('short_name').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  sportId: uuid('sport_id')
    .notNull()
    .references(() => sports.id),
  websiteUrl: text('website_url'),
  logoUrl: text('logo_url'),
});
