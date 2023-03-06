import { Body, Controller, Get, NotFoundException, Post, Req, Request, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserDto, UserSignupDto } from './dto';
import { UserLoginDto } from './dto/UserLogin.dto';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@ApiTags('Authorization API')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Login' })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Body() userLoginDto: UserLoginDto) {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: 'Logout Current User' })
  @Get('/logout')
  logout(@Req() req, @Res() res) {
    req.logout();
    res.redirect('/');
  }

  @ApiOperation({ summary: 'Signup a new User' })
  @Post('signup')
  async signup(@Body() signupUser: UserSignupDto) {
    return this.authService.signup(signupUser);
  }

  @ApiOperation({ summary: "Get User's Information" })
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getProfile(@Request() req): Promise<UserDto> {
    const user = await this.userService.findOne({ userId: req.user.userId });

    if (!user) {
      throw new NotFoundException();
    }

    return new UserDto(user);
  }
}
