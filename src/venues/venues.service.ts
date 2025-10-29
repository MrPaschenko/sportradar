import { Injectable } from '@nestjs/common';

@Injectable()
export class VenuesService {
  getHello(): string {
    return 'Hello from VenuesService!';
  }
}
