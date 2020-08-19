import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [CommonModule, FormsModule, ShoppingListRoutingModule],
})
export class ShoppingListModule {}
