import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionaryService } from '../../application/services/dictionary/dictionary.service';
import { DictionaryController } from 'src/application/controllers/dictionary/dictionary.controller'; 
import { DictionarySchema } from '../database/schemas/dictionary.schema';
import { DictionaryMongoRepository } from 'src/infrastructure/repositories/dictionary/dictionary.mongo.repository';
import { Repositories, Schemas } from './modules.constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Schemas.Dictionary, schema: DictionarySchema }
    ])
  ],
  controllers: [DictionaryController],
  providers: [
    { provide: Repositories.DictionaryRepository, useClass: DictionaryMongoRepository },
    DictionaryService
  ],
})

export class DictionaryModule {}
