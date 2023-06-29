import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

@Entity()
export class WirehouseOwner {
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
	password: string;
}
 