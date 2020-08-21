import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from '../directives/dropdown.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AlertComponent, DropdownDirective],
  exports: [AlertComponent, CommonModule, FormsModule, DropdownDirective],
})
export class SharedModule {}
