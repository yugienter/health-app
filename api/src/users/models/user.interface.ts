import type { Document } from 'mongoose';

export interface User extends Document {
  readonly userId: string;
  readonly displayName: string;
  readonly email: string;
  readonly picture: string;
  readonly roles: string[];
  readonly live?: string;
  readonly resetPasswordToken?: string;
  readonly resetPasswordExpires?: string;
}
