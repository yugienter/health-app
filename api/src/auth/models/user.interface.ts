import type { Document } from 'mongoose';

export interface User extends Document {
  readonly userId?: string;
  readonly email: { type: string; lowercase: true };
  readonly displayName: string;
  readonly picture?: string;
  readonly roles: string[];
  readonly username?: string;
  password?: string;
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
  verifyEmailToken?: string | null;
  verifyEmailExpires?: Date | null;
  isEmailConfirmed?: boolean;
  otpCode: string | null;
  otpCodeExpires?: Date;
  phone?: string;
}
