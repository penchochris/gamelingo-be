import { Schema } from 'mongoose';

export const DictionarySchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    spanish: String,
    english: String,
    japaneseRomaji: String,
    japaneseKanji: String,
    japaneseKana: String,
    categories: [String],
  },
  { strict: false, timestamps: true, autoCreate: true },
);