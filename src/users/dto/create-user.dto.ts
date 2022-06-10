import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.ru", description: "User e-mail address" })
  @IsString({ message: "Should be a string" })
  @IsEmail({}, { message: "Invalid email" })
  readonly email: string;

  @ApiProperty({ example: "pass1234", description: "User password" })
  @IsString({ message: "Should be a string" })
  @Length(4, 16, { message: "Password must be between 4 and 16" })
  readonly password: string;
}
