import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Contract } from 'src/contracts/entities/contract.entity';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

@Entity()
export class Distributor {
	@ApiProperty({
		minimum: 1
	})
	@PrimaryGeneratedColumn()
	id: number;
 
	@ApiProperty()
	@Column()
	name_organisation: string;

	@ApiProperty()
	@Column()
	ogrn: string;

	@ApiProperty({
		minimum: 1
	})
	@Column()
	rate: number;

	@ApiProperty()
	@Column({
		type: 'datetime'
	})
	changed_at: string;

	@OneToMany((type) => Contract, (contract) => contract.distributors)
	contracts: Contract[]
}
