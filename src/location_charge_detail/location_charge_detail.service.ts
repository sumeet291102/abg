import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Location_charge_detail } from './models/location_charge_detail.model';
import { fetch } from 'undici'

@Injectable()
export class Location_charge_detail_service {
    constructor(
        @Inject(CACHE_MANAGER) private cacheService: Cache,
    ) {}

    async get_data() {
        const query = `{
            location_information(input: { mnemonic: "S7J", brand: "A" }) {
                charge_information {
                    location_charge_detail {
                        fee_mnemonic_code
                        fee_carclass_code
                        fee_sub_carclass_code
                        fee_amount
                        fee_percent
                    }
                }
            }
        }`;

        const cachedData = await this.cacheService.get(query);
        if (cachedData) {
          console.log(`Getting data from cache!`, cachedData);
          return cachedData;
        }

        const response = await fetch("https://location.dev.sdp.abg.cloud/location/v2/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            query: query
            }),
        });

        const response_json = await response.json();
        const location_charge_detail_array = [];

        response_json['data'].location_information.charge_information.location_charge_detail.forEach(location_charge_detail => {
            location_charge_detail_array.push(Object.assign(new Location_charge_detail, location_charge_detail))
        });

        this.cacheService.set(query, location_charge_detail_array);
        return location_charge_detail_array;
    }
}
