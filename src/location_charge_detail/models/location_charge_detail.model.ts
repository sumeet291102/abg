import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location_charge_detail {
  @Field()
  fee_mnemonic_code: string;

  @Field()
  fee_carclass_code: string;

  @Field()
  fee_sub_carclass_code: string;

  @Field()
  fee_amount: number;

  @Field()
  fee_percent: number;
}
