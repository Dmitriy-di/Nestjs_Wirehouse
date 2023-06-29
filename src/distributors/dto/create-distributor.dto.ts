import { ApiProperty } from '@nestjs/swagger/dist/decorators';
export class CreateDistributorDto {
	@ApiProperty({
		description: "Название организации"
	})
	name_organisation: string;

	@ApiProperty({
		description: "Рейтинг дистрибьютора"
	})
	rate: number;

	@ApiProperty({
		description: "Время последнего обновления данных о дистрибьюторе"
	})
	changed_at: string;
}