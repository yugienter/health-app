import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Wellcome to the api service of App!!';
  }

  getHello(): string {
    return 'Hello!';
  }
}
