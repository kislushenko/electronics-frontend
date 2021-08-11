import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';
import { ActiveFacetsComponent } from './active-facets.component';
import {IconModule, KeyboardFocusModule} from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    IconModule,
    KeyboardFocusModule,
  ],
  declarations: [ActiveFacetsComponent],
  exports: [ActiveFacetsComponent],
})
export class ActiveFacetsModule {}
