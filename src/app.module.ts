import { Module } from '@nestjs/common';

import { QuizModule } from './infrastructure/modules/quiz.module';
import { InfrastructureModule } from './infrastructure/modules/infrastructure.module';

@Module({
  imports: [QuizModule, InfrastructureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
