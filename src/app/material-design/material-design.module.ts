import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialDesignComponent } from './material-design.component';
import { MaterialDesignRoutingModule } from './material-design-routing.module';

@NgModule({
  declarations: [MaterialDesignComponent],
  imports: [RouterModule, MaterialDesignRoutingModule],
  exports: [],
})
export class MaterialDesignModule {}
