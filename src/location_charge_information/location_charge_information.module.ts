import { Module } from '@nestjs/common';
import { Location_charge_information_service } from './location_charge_information.service';

@Module({
    providers: [Location_charge_information_service],
    exports: [Location_charge_information_service],
})
export class LocationChargeInformationModule {}
