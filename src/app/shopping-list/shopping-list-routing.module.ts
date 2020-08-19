import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //NOTE: use .forChild for feature routing modules
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
