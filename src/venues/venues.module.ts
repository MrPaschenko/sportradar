import { Module } from '@nestjs/common';
import { VenuesController } from './venues.controller';
import { VenuesService } from './venues.service';

@Module({
  imports: [],
  controllers: [VenuesController],
  providers: [VenuesService],
})
export class VenuesModule {}
