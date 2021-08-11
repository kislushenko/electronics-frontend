import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from "@spartacus/storefront";
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';
import {ProductListModule} from '../product/product-list';

@NgModule({
  declarations: [],
  imports: [
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    BaseStorefrontModule,
    ProductListModule
  ],
  exports: [BaseStorefrontModule]
})
export class SpartacusModule { }
