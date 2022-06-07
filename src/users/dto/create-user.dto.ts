import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.ru", description: "User e-mail address" })
  readonly email: string;

  @ApiProperty({ example: "pass1234", description: "User password" })
  readonly passwort: string;
}
