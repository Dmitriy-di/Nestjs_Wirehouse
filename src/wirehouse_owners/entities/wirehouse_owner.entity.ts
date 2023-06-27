import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WirehouseOwner {
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column()
	name_organisation: string;
 
	@Column()
	email: string;
 
}
