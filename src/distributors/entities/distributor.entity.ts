import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Contract } from 'src/contracts/entities/contract.entity';

@Entity()
export class Distributor {
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column()
	name_organisation: string;
  
	@Column()
	ogrn: string;

	@Column()
	rate: string;

	@Column({
		type: 'datetime'
	})
	changed_at: string;

	@OneToMany((type) => Contract, (contract) => contract.distributors)
	contracts: Contract[]
}
