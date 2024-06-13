import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location_charge_information {
  @Field()
  accounting_station_number: string;

  @Field()
  accounting_function: string;

  @Field()
  accounting_brand: string;

  @Field()
  surcharge_date: string;

  @Field()
  underage_fee_date: string;
}
