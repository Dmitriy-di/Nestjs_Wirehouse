import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Distributor } from 'src/distributors/entities/distributor.entity';

@Entity()
export class Contract {
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column()
	first_name: string;
  
	@Column()
	note: string;

	@Column({
		type: 'datetime'
	})
	date_contract: string; 

	@Column({
		type: 'datetime'
	})
	updated_at: string;

	@ManyToOne((type) => Distributor, (distributor) => distributor.contracts, {eager: true})
	distributors: {Distributor: Distributor}
}
