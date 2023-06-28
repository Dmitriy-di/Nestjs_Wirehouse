import { Injectable } from '@nestjs/common';
import { WirehouseOwnersService } from 'src/wirehouse_owners/wirehouse_owners.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private wirehouseOwnerService: WirehouseOwnersService,
		private jwtService: JwtService
	) { }

  async validateUser(name_organisation: string, pass: string): Promise<any> {
    const wirehouseOwner = await this.wirehouseOwnerService.findOne(name_organisation);
	  if (wirehouseOwner && compare(pass, wirehouseOwner.password)) {
      const { password, ...result } = wirehouseOwner;
		 return result;
		 
    }
    return null;
  }
	
  async login(user: any) {
	const payload = { name_organisation: user.name_organisation, sub: user.id };
	return {
	  access_token: this.jwtService.sign(payload),
	};
 }
}