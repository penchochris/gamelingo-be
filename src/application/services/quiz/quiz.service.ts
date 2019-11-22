import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Quiz } from '../../../domain/entities/Quiz';
import { Dictionary } from 'src/domain/entities/Dictionary';
import { Schemas } from 'src/infrastructure/modules/modules.constants';

@Injectable()
export class QuizService {
  
  constructor(@InjectModel(Schemas.Dictionary) private dictionaryModel: Model<Dictionary>) {}
  
  getQuiz(): Quiz[] {
    return this.quiz;
  }

  async getDictionary() {
    return await this.dictionaryModel.find();
  }

  quiz: Quiz[] = [{
    langA: 'Gato',
    langB: 'ねこ',
    options: ['ねこ', 'オオカミ', 'カバ', 'トラ']
  },
  {
    langA: 'Perro',
    langB: 'いぬ',
    options: ['オオカミ', 'ねこ', 'いぬ', 'トラ']
  },
  {
    langA: 'Lobo',
    langB: 'オオカミ',
    options: ['オオカミ', 'ねこ', 'いぬ', 'トラ']
  },
  {
    langA: 'Panda',
    langB: 'パンダ',
    options: ['オオカミ', 'パンダ', 'いぬ', 'トラ']
  }];
}


