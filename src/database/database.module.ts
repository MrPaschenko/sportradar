import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DATABASE_CONNECTION } from './database-connection';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import * as eventsSchema from '../events/schema';
import * as sportsSchema from '../sports/schema';
import * as teamsSchema from '../teams/schema';
import * as venuesSchema from '../venues/schema';

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          connectionString: configService.getOrThrow('DATABASE_URL'),
        });
        return drizzle(pool, {
          schema: {
            ...eventsSchema,
            ...sportsSchema,
            ...teamsSchema,
            ...venuesSchema,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class DatabaseModule {}
