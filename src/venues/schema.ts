import { pgTable, uuid, text, doublePrecision } from 'drizzle-orm/pg-core';

export const venues = pgTable('venues', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  latitude: doublePrecision('latitude').notNull(),
  longitude: doublePrecision('longitude').notNull(),
  websiteUrl: text('website_url'),
});
