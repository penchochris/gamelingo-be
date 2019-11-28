import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from 'src/domain/models/Dictionary';

import { Schemas } from '../../modules/modules.constants';

@Injectable()
export class DictionaryMongoRepository {
  constructor(@InjectModel(Schemas.Dictionary) private dictionaryModel: Model<Dictionary>) {}

  async getDictionary(): Promise<Dictionary[]> {
    return await this.dictionaryModel.find();
  }
  
  async getDictionaryByCategory(category: string): Promise<Dictionary[]> {
    return await this.dictionaryModel.find({ categories: category});
  }

  async saveDictionary(dictionary: Dictionary) {
    const dictionaryToSave = new this.dictionaryModel(dictionary);
    await dictionaryToSave.save();
  }

  async editDictionary(dictionary: Dictionary) {
    return await this.dictionaryModel.updateOne({ "_id": dictionary._id }, dictionary);
  }

  async deleteDictionary(_id: String) {
    return await this.dictionaryModel.deleteOne({ _id });
  }

  async deleteAllDictionary() {
    return await this.dictionaryModel.deleteMany({});
  }
}
