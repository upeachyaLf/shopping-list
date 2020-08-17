import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

import { Ingredent } from '../../common/models/ingredent.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f', { static: false }) editForm: NgForm;

  @Output() itemAdded = new EventEmitter<Ingredent>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.editForm);
    this.itemAdded.emit(this.editForm.value);
    this.editForm.reset();
  }
}
