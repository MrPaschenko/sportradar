import { pgTable, uuid, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { teams } from '../teams/schema';

export const sports = pgTable('sports', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description'),
});

export const sportRelations = relations(sports, ({ many }) => ({
  teams: many(teams),
}));
