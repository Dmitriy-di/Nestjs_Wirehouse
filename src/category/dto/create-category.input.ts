import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: false })
  name: string;
}
