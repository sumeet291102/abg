import { Module } from '@nestjs/common';
import { LocationChargeDetailModule } from 'src/location_charge_detail/location_charge_detail.module'; 
import { LocationChargeDisplayModule } from 'src/location_charge_display/location_charge_display.module';
import { LocationChargeIndicatorModule } from 'src/location_charge_indicator/location_charge_indicator.module';
import { LocationChargeInformationModule } from 'src/location_charge_information/location_charge_information.module';
import { Charge_information_service } from './charge_information.service';
import { ChargeInformationResolver } from './charge_information.resolver';

@Module({
    imports: [
        LocationChargeDetailModule,
        LocationChargeDisplayModule,
        LocationChargeIndicatorModule,
        LocationChargeInformationModule,
      ],
    providers: [
        Charge_information_service,
        ChargeInformationResolver
    ],
})
export class ChargeInformationModule {}
