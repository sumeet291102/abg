import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location_charge_display {
  @Field()
  fee_mnemonic_code: string;

  @Field()
  fee_carclass_code: string;

  @Field()
  fee_sub_carclass_code: string;

  @Field()
  fee_description: string;

  @Field()
  fee_identifier: string;
}
