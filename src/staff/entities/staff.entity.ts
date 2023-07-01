import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

@Entity()
export class Staff {
  @ApiProperty({
    minimum: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  first_name: string;

  @ApiProperty()
  @Column()
  last_name: string;

  @ManyToOne((type) => Post, (post) => post.staff, { eager: true })
  posts: { Post: Post };

  @ApiProperty()
  @Column({
    type: 'datetime',
  })
  changed_at: string;
}
