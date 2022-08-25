import { Controller, Get } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenDto } from './dto/token.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  async getToken(): Promise<TokenDto> {
    return this.tokenService.getToken();
  }
}
