import { Dictionary } from 'src/domain/models/Dictionary';

export interface DictionaryRepository {
  getDictionary(): Promise<Dictionary[]>;
  getDictionaryByCategory(category: string): Promise<Dictionary[]>;
  saveDictionary(dictionary: Dictionary);
  editDictionary(dictionary: Dictionary);
  deleteDictionary(_id: string);
  deleteAllDictionary();
}
