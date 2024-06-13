import { Module } from '@nestjs/common';
import { Location_charge_display_service } from './location_charge_display.service';

@Module({
    providers: [Location_charge_display_service],
    exports: [Location_charge_display_service],
})
export class LocationChargeDisplayModule {}
