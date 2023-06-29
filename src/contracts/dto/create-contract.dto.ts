import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateContractDto {
	@ApiProperty({
		description: "Имя сотрудника"
	})
	first_name: string;

	@ApiProperty({
		description: "Фамилия сотрудника"
	})
	last_name: string;
		 
	@ApiProperty({
		description: "Заметка о деталях контракта"
	})
	note: string;

	@ApiProperty({
		description: "Дата заключения контракта"
	})
	date_contract: 'datetime';
		 
	@ApiProperty({
		description: "Дата обновления записи"
	})
	updated_at: 'datetime';
}