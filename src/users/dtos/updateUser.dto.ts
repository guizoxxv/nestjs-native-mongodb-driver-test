import { IsEmail, IsInt, IsOptional } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
  
  @IsOptional()
  @IsInt()
  age?: number;
}