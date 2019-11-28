import { Schema } from 'mongoose';

export const DictionarySchema = new Schema(
  {
    spanish: String,
    english: String,
    japaneseRomaji: String,
    japaneseKanji: String,
    japaneseKana: String,
    categories: [String],
  },
);