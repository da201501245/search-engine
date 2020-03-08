import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchEntity } from './search/search.entity';

@Module({
  imports: [TypeOrmModule.forRoot(),
    SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
