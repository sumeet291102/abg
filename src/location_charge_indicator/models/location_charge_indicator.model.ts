import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location_charge_indicator {
  @Field()
  indicator_name: string;

  @Field()
  group_name: string;

  @Field()
  indicator_value: string;
}
