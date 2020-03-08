import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('content_search')
export class SearchEntity {

    @PrimaryGeneratedColumn({name : 'cs_id'})
    ContentId: number;

    @Column({ name: 'title' })
    ContentTitle: string;

    @Column({ name: 'cs_details' })
    ContentDetails: string;

    @Column({ name: 'url' })
    url: string;

    @Column({ name: 'location' })
    Location: string;

    @Column({ name: 'adult_content' })
    AdultContent: string;

    @Column({ name: 'sounds_like' })
    ContentSoundLike: string;

    @Column({ name: 'is_active' })
    IsActive: number;
}
