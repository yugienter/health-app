import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import type { VerifiedCallback } from 'passport-jwt';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { authConfig } from '../auth-config.development';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(/*private readonly authService: AuthService*/) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: authConfig.jwtSecretKey,
    });
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async validate(payload: any, done: VerifiedCallback) {
    try {
      Logger.log('JWT UserProfile', 'Auth');

      done(null, payload);
    } catch (error) {
      throw new UnauthorizedException('unauthorized', error.message);
    }
  }
}
