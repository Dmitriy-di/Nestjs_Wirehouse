import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateWirehouseOwnerDto {
	@ApiProperty({
		description: "Название организации, владеющей складом"
	})
	name_organisation: string;

	@ApiProperty({
		description: "Пароль"
	})
	password: string;
}
