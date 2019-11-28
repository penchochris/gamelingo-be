import { Document } from 'mongoose';

export interface Dictionary extends Document {
  _id: string;
  spanish: string;
  english: string;
  japaneseRomaji: string;
  japaneseKanji: string;
  japaneseKana: string;
  categories: string[];
}