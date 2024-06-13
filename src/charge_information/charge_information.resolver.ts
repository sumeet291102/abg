
import { Resolver, ResolveField, Args, Query, Parent } from "@nestjs/graphql"
import { Charge_information_service } from "./charge_information.service";
import { Charge_information } from "./models/charge_information.model"
import { Location_charge_detail } from "src/location_charge_detail/models/location_charge_detail.model";
import { Location_charge_display } from "src/location_charge_display/models/location_charge_display.model";
import { Location_charge_information } from "src/location_charge_information/models/location_charge_information.model";
import { Location_charge_indicator } from "src/location_charge_indicator/models/location_charge_indicator.model";
import { Location_charge_detail_service } from "src/location_charge_detail/location_charge_detail.service";
import { Location_charge_display_service } from "src/location_charge_display/location_charge_display.service";
import { Location_charge_indicator_service } from "src/location_charge_indicator/location_charge_indicator.service";
import { Location_charge_information_service } from "src/location_charge_information/location_charge_information.service";


@Resolver(of => Charge_information)
export class ChargeInformationResolver {
  constructor(
    private charge_information_service: Charge_information_service,
    private location_charge_detail_service: Location_charge_detail_service,
    private location_charge_display_service: Location_charge_display_service,
    private location_charge_indicator_service: Location_charge_indicator_service,
    private location_charge_information_service: Location_charge_information_service,
  ) {}

  @Query(returns => Charge_information)
  async charge_information() {
    return await this.charge_information_service.get_data();
  }

  @ResolveField(returns => [Location_charge_detail])
  async location_charge_detail(@Parent() charge_information: Charge_information) {   
    const data = await this.location_charge_detail_service.get_data();
    console.log(data);
    return data;
  }

  @ResolveField(returns => [Location_charge_display])
  async location_charge_display(@Parent() charge_information: Charge_information) {   
    return await this.location_charge_display_service.get_data();
  }

  @ResolveField(returns => [Location_charge_indicator])
  async location_charge_indicator(@Parent() charge_information: Charge_information) {   
    return await this.location_charge_indicator_service.get_data();
  }

  @ResolveField(returns => [Location_charge_information])
  async location_charge_information(@Parent() charge_information: Charge_information) {   
    return await this.location_charge_information_service.get_data();
  }
}
