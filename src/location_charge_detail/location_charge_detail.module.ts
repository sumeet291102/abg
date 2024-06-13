import { Module } from '@nestjs/common';
import { Location_charge_detail_service } from './location_charge_detail.service';

@Module({
    providers: [Location_charge_detail_service],
    exports: [Location_charge_detail_service],
})
export class LocationChargeDetailModule {}
