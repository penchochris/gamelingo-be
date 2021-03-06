import { Module } from '@nestjs/common';
import { QuizService } from '../../application/services/quiz/quiz.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionarySchema } from '../database/schemas/dictionary.schema';
import { QuizController } from '../../application/controllers/quiz/quiz.controller'; 
import { DictionaryMongoRepository } from 'src/infrastructure/repositories/dictionary/dictionary.mongo.repository';
import { Repositories, Schemas } from './modules.constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Schemas.Dictionary, schema: DictionarySchema }
    ])
  ],
  controllers: [QuizController],
  providers: [
    { provide: Repositories.DictionaryRepository, useClass: DictionaryMongoRepository },
    QuizService,
  ],
})
export class QuizModule {}
