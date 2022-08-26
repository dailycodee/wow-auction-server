import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { TokenService } from '../token/token.service';
import { firstValueFrom } from 'rxjs';
import { RealmModel } from './models/realm.model';
import { DEFAULT_LOCALE, LOCALE_ARRAY } from '../config/constants';

@Injectable()
export class RealmService {
  constructor(
    private readonly httpService: HttpService,
    private readonly tokenService: TokenService,
  ) {}

  async getAllRealms(locale: string): Promise<RealmModel> {
    locale = LOCALE_ARRAY.includes(locale) ? locale : DEFAULT_LOCALE;

    const token = await this.tokenService.getToken();

    const realmsResponse = await firstValueFrom(
      this.httpService.get(
        `${process.env.BATTLE_NET_API_LINK}/search/connected-realm`,
        {
          params: {
            namespace: 'dynamic-classic-eu',
            orderby: 'realm.name',
            _page: 1,
            access_token: token,
          },
        },
      ),
    );

    return realmsResponse.data.results.map((i) => ({
      id: i.data.realms[0].id,
      name: i.data.realms[0].name[locale],
      region: i.data.realms[0].region[locale],
      category: i.data.realms[0].category[locale],
      locale: i.data.realms[0].locale,
      type: i.data.realms[0].type.name[locale],
      hasQueue: i.data.has_queue,
      status: i.data.status.name[locale],
    }));
  }
}
