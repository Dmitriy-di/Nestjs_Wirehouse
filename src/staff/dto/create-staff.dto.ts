import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateStaffDto {
	@ApiProperty({
		description: "Имя"
	})
	first_name: string;

	@ApiProperty({
		description: "Фамилия"
	})
	last_name: string;

	@ApiProperty({
		description: "id поста (должности)"
	})
	postsId: number;

	@ApiProperty({
		description: "Время последнего обновления"
	})
	changed_at: string;
} 
