import { SearchService } from './search.service';
import { Controller, Get, Query } from '@nestjs/common';


@Controller('search')
export class SearchController {

    constructor(private readonly searchService: SearchService) {
    }

    @Get()
    public async search(@Query('word') word: string, @Query('isAdult') isAdult: number) {
        return await this.searchService.getSearchResult(word, isAdult);

    }
}
