import { ApiProperty } from '@nestjs/swagger/dist';

export class CreatePostDto {
	@ApiProperty({
		description: "Название поста сотрудника"
	})
	name_post: string;
		 
	@ApiProperty({
		description: "Запралата для данной должности"
	})
	salary: number;
}
