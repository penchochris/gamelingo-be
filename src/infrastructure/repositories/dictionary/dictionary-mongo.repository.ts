import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Dictionary } from '../../../domain/entities/Dictionary';
import { Schemas } from '../../modules/modules.constants';


@Injectable()
export class DictionaryMongoRepository {
  constructor(@InjectModel(Schemas.Dictionary) private readonly dictionary: Model<Dictionary>) {}

  async getDictionary() {
    await this.dictionary.find();
  }
}
