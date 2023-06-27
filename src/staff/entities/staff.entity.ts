import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from 'src/posts/entities/post.entity';
@Entity()
export class Staff {
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column()
	first_name: string;
  
	@Column()
	last_name: string;

	@ManyToOne((type) => Post, (post) => post.staff, {eager: true})
	posts: Post[]

	@Column({
		type: 'datetime'
	})
	changed_at: string;
}
