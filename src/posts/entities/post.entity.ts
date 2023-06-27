import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Staff } from "src/staff/entities/staff.entity"

@Entity()
export class Post {
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column()
	name_post: string;
  
	@Column()
	salary: number;

	@OneToMany((type) => Staff, (staff) => staff.posts)
	staff: Staff[]
}
