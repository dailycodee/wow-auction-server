import { ApiProperty } from '@nestjs/swagger';

export class TokenModel {
  @ApiProperty({
    description: 'Access Token for WOW API services.',
    type: String,
  })
  access_token: string;

  @ApiProperty({
    description: 'Access Token type. Bearer by default.',
    type: String,
  })
  token_type: string;

  @ApiProperty({
    description: 'Access Token expires in.',
    type: String,
  })
  expires_in: number;

  @ApiProperty({
    description: 'Access Token unique id.',
    type: String,
  })
  sub: string;
}
