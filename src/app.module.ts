import { Module } from '@nestjs/common';

import { QuizModule } from './infrastructure/modules/quiz.module';
import { DictionaryModule } from './infrastructure/modules/dictionary.module';
import { InfrastructureModule } from './infrastructure/modules/infrastructure.module';

@Module({
  imports: [
    QuizModule,
    DictionaryModule,
    InfrastructureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
