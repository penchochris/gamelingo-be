import { Controller, Post, Body } from '@nestjs/common';
import { GetQuizDto } from './dto/get-quiz.dto';

import { Quiz } from 'src/domain/models/Quiz';

import { QuizService } from 'src/application/services/quiz/quiz.service';

@Controller('quiz')
export class QuizController {
  
  constructor(private quizService: QuizService) {}

  @Post()
  async getQuiz(@Body() quizOptions: GetQuizDto): Promise<Quiz[]> {
    return await this.quizService.getQuiz(quizOptions);
  }
  
}
