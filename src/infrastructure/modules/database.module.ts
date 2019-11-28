import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/gamelingo',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  ],
  providers: [],
  exports: [],
})

export class DatabaseModule {}
