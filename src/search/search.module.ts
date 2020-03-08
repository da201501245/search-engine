import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchEntity } from './search.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SearchEntity])],
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule { }
