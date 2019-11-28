import { Injectable, Inject } from '@nestjs/common';

import { Repositories } from 'src/infrastructure/modules/modules.constants';
import { DictionaryRepository } from 'src/domain/repositories/dictionary/dictionary.repository';
import { Dictionary } from 'src/domain/models/Dictionary';

@Injectable()
export class DictionaryService {
  
  constructor(
    @Inject(Repositories.DictionaryRepository)
    private dictionaryRepository: DictionaryRepository
  ) {}

  async getDictionary() {
    return await this.dictionaryRepository.getDictionary();
  }

  async getDictionaryByCategory(category: string) {
    return await this.dictionaryRepository.getDictionaryByCategory(category);
  }

  async saveDictionary(dictionary: Dictionary) {
    return await this.dictionaryRepository.saveDictionary(dictionary);
  }

  async editDictionary(dictionary: Dictionary) {
    return await this.dictionaryRepository.editDictionary(dictionary);
  }

  async deleteDictionary(_id: string) {
    return await this.dictionaryRepository.deleteDictionary(_id)
  }

  async deleteAllDictionary() {
    return await this.dictionaryRepository.deleteAllDictionary();
  }

}
