import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wirehouse {
	@PrimaryGeneratedColumn()
  id: number;

  @Column()
  capacity_kg: number;

  @Column()
  free_space_m2: number;
	
  @Column()
  address: string;

}
