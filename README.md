## Установка

```bash
$ npm install
```

Необходимо создать файл .env в корневой папке и указать там следующие переменные

- MONGO_CONNECTION_STRING - строка подключения к MongoDB
- BATTLE_NET_TOKEN_LINK - ссылка oauth battle net 
- BATTLE_NET_CLIENT_ID - clientId
- BATTLE_NET_CLIENT_SECRET - clientSecret
- BATTLE_NET_API_LINK - ссылка на API

Для EU серверов:

https://eu.api.blizzard.com/data/wow

https://eu.battle.net/oauth/token

Регистрация ClientId и ClientSecret:
https://develop.battle.net/access/clients

## Запуск сервера

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Тесты

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```