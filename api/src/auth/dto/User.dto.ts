import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

import type { User } from '../models';

export class UserDto {
  @IsEmail()
  @ApiProperty({
    example: 'someone@email.com',
    description: "User's Email",
    type: () => 'string',
  })
  readonly email: { type: string; lowercase: true };

  @IsString()
  @MinLength(5)
  @ApiProperty({ description: "User's Password (only applies when using username/password)", type: () => 'string' })
  readonly password?: string;

  @IsString()
  @ApiProperty({
    description: "User's Display Name to use in the UI",
    type: () => 'string',
  })
  readonly displayName: string;

  readonly id?: string;

  @ApiProperty({ description: 'User Id (when defined)', type: () => 'string' })
  readonly userId?: string;

  @IsOptional()
  @ApiProperty({
    description: "User's Profile Picture URL",
    type: () => 'string',
  })
  readonly picture?: string;

  @ApiProperty({ description: "User's Role(s)" })
  readonly roles: string[];

  @IsOptional()
  @ApiProperty({
    description: "User's Username (only applies when using username/password)",
  })
  readonly username?: string;

  @IsOptional()
  @ApiProperty({ description: 'Email is verified or not' })
  readonly isEmailConfirmed?: boolean;

  constructor(user: User) {
    //super(user);
    this.id = user.id;
    this.userId = user.userId;
    this.displayName = user.displayName;
    this.roles = user.roles;
    this.email = user.email;
    this.picture = user.picture;
    this.isEmailConfirmed = user.isEmailConfirmed;
  }
}
