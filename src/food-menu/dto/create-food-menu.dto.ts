import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFoodMenuDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

