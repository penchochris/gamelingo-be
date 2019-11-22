import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizService } from '../../application/services/quiz/quiz.service';
import { QuizController } from '../../application/controllers/quiz/quiz.controller'; 
import { DictionarySchema } from '../database/schemas/dictionary.schema';
import { Schemas } from './modules.constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Schemas.Dictionary, schema: DictionarySchema }
    ])
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
