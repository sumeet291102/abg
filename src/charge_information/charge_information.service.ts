import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Charge_information } from './models/charge_information.model';
import { fetch } from 'undici'

@Injectable()
export class Charge_information_service {
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
                    location_charge_display {
                        fee_mnemonic_code
                        fee_carclass_code
                        fee_sub_carclass_code
                        fee_description
                        fee_identifier
                    }
                    location_charge_indicator {
                        indicator_name
                        group_name
                        indicator_value
                    }
                    location_charge_information {
                        accounting_station_number
                        accounting_function
                        accounting_brand
                        surcharge_date
                        underage_fee_date
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
        const data = Object.assign(new Charge_information, response_json['data'].location_information.charge_information);
        this.cacheService.set(query, data);
        return data;
    }
}
