export class VerificationTokenPayloadDto {
  readonly email: { type: string; lowercase: true };

  readonly verifyEmailToken: string;
}
