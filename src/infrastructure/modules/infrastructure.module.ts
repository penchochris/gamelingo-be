import { 
  HttpModule, 
  Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';

import { HttpConfigService } from '../../infrastructure/services/http-config.service';

@Module({
  imports: [
    HttpModule.registerAsync({
       useClass: HttpConfigService,
    }),
    DatabaseModule,
  ],
  providers: [],
  exports: [],
})
export class InfrastructureModule {}
