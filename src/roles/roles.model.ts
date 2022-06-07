import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/user.model";
import { UserRoles } from "../user-roles/user-roles.model";

interface RolesCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RolesCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "ADMIN", description: "Unique role value" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({ example: "Admin", description: "Description role" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  // Many to many relationship
  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}