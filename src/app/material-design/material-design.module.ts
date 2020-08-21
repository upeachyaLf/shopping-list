import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../common/shared.module';
import { MaterialDesignComponent } from './material-design.component';
import { MaterialDesignRoutingModule } from './material-design-routing.module';

@NgModule({
  declarations: [MaterialDesignComponent],
  imports: [
    RouterModule,
    MaterialDesignRoutingModule,
    MatGridListModule,
    SharedModule,
  ],
  exports: [],
})
export class MaterialDesignModule {}
