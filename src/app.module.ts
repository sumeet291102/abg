import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ChargeInformationModule } from './charge_information/charge_information.module';
import { LocationChargeDetailModule } from './location_charge_detail/location_charge_detail.module';
import { LocationChargeDisplayModule } from './location_charge_display/location_charge_display.module';
import { LocationChargeIndicatorModule } from './location_charge_indicator/location_charge_indicator.module';
import { LocationChargeInformationModule } from './location_charge_information/location_charge_information.module';
import { CacheModule } from '@nestjs/cache-manager'
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'redis',
      port: 6379,
    }),
    ChargeInformationModule,
    LocationChargeDetailModule,
    LocationChargeDisplayModule,
    LocationChargeIndicatorModule,
    LocationChargeInformationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
