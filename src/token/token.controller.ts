import { Controller, Get } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenModel } from './models/token.model';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('token')
@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @ApiResponse({
    type: String,
  })
  @Get()
  async getToken(): Promise<TokenModel> {
    return this.tokenService.getToken();
  }
}
