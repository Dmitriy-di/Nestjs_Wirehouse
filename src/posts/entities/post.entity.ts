import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Staff } from 'src/staff/entities/staff.entity';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

@Entity()
export class Post {
  @ApiProperty({
    minimum: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name_post: string;

  @ApiProperty()
  @Column()
  salary: number;

  @OneToMany((type) => Staff, (staff) => staff.posts)
  staff: Staff[];
}
