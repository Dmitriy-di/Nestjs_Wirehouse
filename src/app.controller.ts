import { AppService } from './app.service';
import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { WirehouseOwnersService } from './wirehouse_owners/wirehouse_owners.service';
import { CreateWirehouseOwnerDto } from './wirehouse_owners/dto/create-wirehouse_owner.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AppController {
  constructor(
    private readonly wirehouseOwnersService: WirehouseOwnersService,
    private authService: AuthService
  ) { }

  @Post('/register')
  register(@Body() createWirehouseOwnerDto: CreateWirehouseOwnerDto) {
    return this.wirehouseOwnersService.register(createWirehouseOwnerDto);
  }

  @UseGuards(AuthGuard('local'))
  @Get('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
