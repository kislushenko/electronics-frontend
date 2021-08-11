import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { FacetModule } from '../facet/facet.module';
import { FacetListComponent } from './facet-list.component';
import {IconModule, KeyboardFocusModule} from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
    FacetModule,
    KeyboardFocusModule,
  ],
  declarations: [FacetListComponent],
  exports: [FacetListComponent],
})
export class FacetListModule {}
