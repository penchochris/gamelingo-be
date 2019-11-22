import { Controller, Get, Post, Body, Delete, Param, Put, Req, Res } from '@nestjs/common';
import { GetQuizDto } from './dto/get-quiz.dto';

import { Quiz } from '../../../domain/entities/Quiz';

import { QuizService } from '../../services/quiz/quiz.service';
import { Dictionary } from 'src/domain/entities/Dictionary';

@Controller('quiz')
export class QuizController {
  
  constructor(private quizService: QuizService) {}

  @Get()
  getQuiz(): Quiz[] {
    return this.quizService.getQuiz();
  }

  @Get('/test')
  getDictionary(): Promise<Dictionary[]> {
    return this.quizService.getDictionary();
  }

  //POST EXAMPLE (NO NEED FOR HERE):
  @Post()
  createQuiz(@Body() task: GetQuizDto): string {
    return `Esto es una prueba de post ${task}`;
  }

  //DELETE EXAMPLE (NO NEED FOR HERE):
  @Delete()
  deleteQuiz(@Param('id') id): string {
    console.log(id);
    return `Esto es una prueba de delete ${id}`
  }

  //PUT EXAMPLE (NO NEED FOR HERE):
  @Put(':id')
  updateQuiz(@Body('id') quiz:GetQuizDto, @Param('id') id): string {
    return `Esto es una prueba de put`
  }
}
