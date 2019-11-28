import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { DictionaryService } from 'src/application/services/dictionary/dictionary.service';
import { Dictionary } from 'src/domain/models/Dictionary';

@Controller('dictionary')
export class DictionaryController {
  
  constructor(private dictionaryService: DictionaryService) {}

  @Get()
  getDictionary(): Promise<Dictionary[]> {
    return this.dictionaryService.getDictionary();
  }

  @Get(':category')
  getDictionaryByCategory(@Param() category: string): Promise<Dictionary[]> {
    return this.dictionaryService.getDictionaryByCategory(category);
  }

  @Post()
  saveDictionary(@Body() dictionary: Dictionary) {
    return this.dictionaryService.saveDictionary(dictionary);
  }

  @Put()
  editDictionary(@Body() dictionary: Dictionary) {
    return this.dictionaryService.editDictionary(dictionary);
  }

  @Delete()
  deleteAllDictionary() {
    return this.dictionaryService.deleteAllDictionary();
  }

  @Delete(':_id')
  deleteDictionary(@Param() _id: string) {
    return this.dictionaryService.deleteDictionary(_id);
  }

}
