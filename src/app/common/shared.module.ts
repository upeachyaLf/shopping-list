import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterTestingModule } from '@angular/router/testing';

import { CardComponent } from './card/card.component';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from '../directives/dropdown.directive';
import { CheckboxComponent } from './form/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterTestingModule,
  ],
  declarations: [
    AlertComponent,
    DropdownDirective,
    CardComponent,
    CheckboxComponent,
  ],
  exports: [
    AlertComponent,
    CommonModule,
    FormsModule,
    DropdownDirective,
    CardComponent,
    MatCardModule,
    MatButtonModule,
    CheckboxComponent,
  ],
})
export class SharedModule {}
