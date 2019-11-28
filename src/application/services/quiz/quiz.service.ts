import { Injectable, Inject } from '@nestjs/common';

import { Quiz } from 'src/domain/models/Quiz';
import { GetQuizDto } from 'src/application/controllers/quiz/dto/get-quiz.dto';
import { Dictionary } from 'src/domain/models/Dictionary';
import { DictionaryRepository } from 'src/domain/repositories/dictionary/dictionary.repository';
import { Repositories } from 'src/infrastructure/modules/modules.constants';

import { shuffle } from "lodash";

@Injectable()
export class QuizService {
  
  constructor(
    @Inject(Repositories.DictionaryRepository)
    private dictionaryRepository: DictionaryRepository
  ) {}

  async getQuiz(quizOptions: GetQuizDto): Promise<Quiz[]> {
    const dictionary: Dictionary[] = await this.dictionaryRepository.getDictionaryByCategory(quizOptions.category);

    const quiz: Quiz[] = dictionary.map( word => {

      const options: string[] = shuffle(this.get4RandomWords(dictionary, word[quizOptions.langB], quizOptions.langB));

      return {
        langA: word[quizOptions.langA],
        langB: word[quizOptions.langB],
        options,
      }
    });

  
    return shuffle(quiz);
  }

  get4RandomWords(dictionary: Dictionary[], word: string, language: string): string[] {
    const options = [word];

    while (options.length < 4) {
      const randomWord: string = dictionary[Math.floor(Math.random() * (dictionary.length -1))][language];
      if(!options.includes(randomWord) && randomWord !== '') {
        options.push(randomWord);
      }
    }

    return options;
  }

}
