import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { TokenModel } from './models/token.model';

@Injectable()
export class TokenService {
  constructor(private readonly httpService: HttpService) {}

  async getToken(): Promise<TokenModel> {
    const encodedClientData = Buffer.from(
      `${process.env.BATTLE_NET_CLIENT_ID}:${process.env.BATTLE_NET_CLIENT_SECRET}`,
    ).toString('base64');

    const tokenResponse = await firstValueFrom(
      this.httpService.post(
        process.env.BATTLE_NET_TOKEN_LINK,
        'grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${encodedClientData}`,
          },
        },
      ),
    );

    return tokenResponse.data.access_token;
  }
}
