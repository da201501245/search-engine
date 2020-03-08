import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchEntity } from './search.entity';
import { Repository, Like } from 'typeorm';
import * as metaphone from 'metaphone';

@Injectable()
export class SearchService {
    constructor(@InjectRepository(SearchEntity)
    private readonly searchRepository: Repository<SearchEntity>) { }

    public async getSearchResult(word: string, isAdult: number, location?: string) {
        word = metaphone(word);
        let conditions = {};
        if (isAdult == 1) {
            conditions = {
                ContentSoundLike: Like(`%${word}%`),
                IsActive: 1,
                // Location: location,
            };
        } else {
            conditions = {
                ContentSoundLike: Like(`%${word}%`),
                IsActive: 1,
                AdultContent: isAdult,
                // Location: location,
            };
        }
        return await this.searchRepository.find({
            where: conditions,
        });
    }
}
