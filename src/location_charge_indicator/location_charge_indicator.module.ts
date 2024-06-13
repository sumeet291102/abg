import { Module } from '@nestjs/common';
import { Location_charge_indicator_service } from './location_charge_indicator.service';

@Module({
    providers: [Location_charge_indicator_service],
    exports: [Location_charge_indicator_service],
})
export class LocationChargeIndicatorModule {}
