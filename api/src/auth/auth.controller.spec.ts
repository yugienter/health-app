import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

describe('Auth Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    const mockAuthService = {
      login: jest.fn(),
      forgotPassword: jest.fn(),
      register: jest.fn(),
      resetPassword: jest.fn(),
      confirmEmail: jest.fn(),
      resendConfirmationLinkEmail: jest.fn(),
    };
    const mockUserService = {
      login: jest.fn(),
      forgotPassword: jest.fn(),
      register: jest.fn(),
      resetPassword: jest.fn(),
      confirmEmail: jest.fn(),
      resendConfirmationLinkEmail: jest.fn(),
    };

    module = await Test.createTestingModule({
      imports: [],
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AuthController = module.get<AuthController>(AuthController);
    expect(controller).toBeDefined();
  });
});
