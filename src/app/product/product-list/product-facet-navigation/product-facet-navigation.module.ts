import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { ActiveFacetsModule } from './active-facets/active-facets.module';
import { FacetListModule } from './facet-list/facet-list.module';
import { ProductFacetNavigationComponent } from './product-facet-navigation.component';
import {IconModule} from '@spartacus/storefront';
@NgModule({
  imports: [
    CommonModule,
    FacetListModule,
    ActiveFacetsModule,
    IconModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductRefinementComponent: {
          component: ProductFacetNavigationComponent,
        },
      },
    }),
  ],
  declarations: [ProductFacetNavigationComponent],
  exports: [ProductFacetNavigationComponent],
})
export class ProductFacetNavigationModule {}
