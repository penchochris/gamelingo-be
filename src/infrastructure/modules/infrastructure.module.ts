import { 
  HttpModule, 
  Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';

import { HttpConfigService } from '../../infrastructure/services/http-config.service';

@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [],
  exports: [],
})
export class InfrastructureModule {}
