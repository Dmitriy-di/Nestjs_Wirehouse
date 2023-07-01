import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'name_organisation',
      passwordField: 'password',
    });
  }

  async validate(name_organisation: string, password: string): Promise<any> {
    const wirehouseOwner = await this.authService.validateUser(
      name_organisation,
      password,
    );
    if (!wirehouseOwner) {
      throw new UnauthorizedException();
    }
    return wirehouseOwner;
  }
}
