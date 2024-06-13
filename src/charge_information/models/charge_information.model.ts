
import { Field, ObjectType } from '@nestjs/graphql';
import { Location_charge_detail } from 'src/location_charge_detail/models/location_charge_detail.model';
import { Location_charge_display } from 'src/location_charge_display/models/location_charge_display.model';
import { Location_charge_indicator } from 'src/location_charge_indicator/models/location_charge_indicator.model';
import { Location_charge_information } from 'src/location_charge_information/models/location_charge_information.model';


@ObjectType()
export class Charge_information {
  @Field(type => [Location_charge_detail])
  location_charge_details: Location_charge_detail[];

  @Field(type => [Location_charge_display])
  location_charge_displays: Location_charge_display[];

  @Field(type => [Location_charge_indicator])
  location_charge_indicators: Location_charge_indicator[];

  @Field(type => [Location_charge_information])
  location_charge_informations: Location_charge_information[];
}
