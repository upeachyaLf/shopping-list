import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CardComponent } from './card/card.component';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from '../directives/dropdown.directive';

@NgModule({
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule],
  declarations: [AlertComponent, DropdownDirective, CardComponent],
  exports: [
    AlertComponent,
    CommonModule,
    FormsModule,
    DropdownDirective,
    CardComponent,
    MatCardModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
