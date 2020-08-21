import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard';
import { MaterialDesignComponent } from './material-design.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MaterialDesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //NOTE: use .forChild for feature routing modules
  exports: [RouterModule],
})
export class MaterialDesignRoutingModule {}
