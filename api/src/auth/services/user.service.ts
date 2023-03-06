import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { decode } from 'jsonwebtoken';
import { Model, Types } from 'mongoose';

import { UserDto } from '../dto';
import type { ResetPasswordDto } from '../dto/ResetPassword.dto';
import type { UserSignupDto } from '../dto/UserSignup.dto';
import type { User } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async create(newUser: User | UserSignupDto): Promise<User> {
    const objectId = Types.ObjectId();
    const roles = ['USER'];
    const userCount = await this.count();

    const userId = (newUser as User)?.userId || objectId.toString();
    const createdUser = new this.userModel({
      ...newUser,
      roles,
      _id: objectId,
      userId,
    });

    return createdUser.save();
  }

  async count(): Promise<number> {
    return this.userModel.countDocuments().exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel?.findById(id).exec();

    if (!user) {
      throw new NotFoundException('Could not find user.');
    }

    return user;
  }

  async findOne(userProperty): Promise<User | null> {
    return this.userModel.findOne(userProperty).exec();
  }

  // async updateMe(updatedUser: User) {
  //   const user = await this.findOne({ userId: updatedUser.userId });
  //   user.displayName = updatedUser.displayName;
  //   user.email = updatedUser.email;
  // }

  saveResetToken(user: User, token: string, resetPasswordExpires: Date): Promise<User> {
    user.resetPasswordToken = token;
    user.resetPasswordExpires = resetPasswordExpires; // 1 hour

    return user.save();
  }

  saveOtpCode(user: User, otpCode: string, otpCodeExpires: Date): Promise<User> {
    user.otpCode = otpCode;
    user.otpCodeExpires = otpCodeExpires;

    return user.save();
  }

  async saveNewPassword(user: User, resetPasswordDto: ResetPasswordDto): Promise<User> {
    const isTokenValid = await this.validateHash(resetPasswordDto.resetPasswordToken, user.resetPasswordToken);

    if (!isTokenValid) {
      throw new HttpException('Password reset token is invalid or has expired', 401);
    }

    user.password = resetPasswordDto.newPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    return user.save();
  }

  saveVerifyToken(user: User, token: string, verifyEmailExpires: Date): Promise<User> {
    user.verifyEmailToken = token;
    user.verifyEmailExpires = verifyEmailExpires;

    return user.save();
  }

  async validateHash(plainPassword: string, hashedPassword: string | null | undefined): Promise<boolean> {
    if (!plainPassword || !hashedPassword) {
      return Promise.resolve(false);
    }

    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
