import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { AuthGuard } from '../auth/auth-guard';

const routes: Routes = [
  { path: '', component: ShoppingListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //NOTE: use .forChild for feature routing modules
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
