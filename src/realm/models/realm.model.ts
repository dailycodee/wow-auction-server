import { ApiProperty } from '@nestjs/swagger';

export class RealmModel {
  @ApiProperty({
    description: 'Realm id',
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: 'Realm name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Realm region',
    type: String,
  })
  region: string;

  @ApiProperty({
    description: 'Realm category',
    type: String,
  })
  category: string;

  @ApiProperty({
    description: 'Realm locale',
    type: String,
  })
  locale: string;

  @ApiProperty({
    description: 'Realm type',
    type: String,
  })
  type: string;

  @ApiProperty({
    description: 'Does the realm have a queue?',
    type: Boolean,
  })
  hasQueue: boolean;

  @ApiProperty({
    description: 'Realm status',
    type: String,
  })
  status: string;
}
