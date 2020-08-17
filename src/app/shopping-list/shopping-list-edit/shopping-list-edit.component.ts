import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { Ingredent } from '../../common/models/ingredent.model';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) editForm: NgForm;
  @Output() itemAdded = new EventEmitter<Ingredent>();

  subscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editListItemChanged.subscribe(
      (index) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editForm.setValue(this.shoppingListService.getListItem(index));
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.editMode
      ? this.shoppingListService.editListItem(
          this.editItemIndex,
          this.editForm.value
        )
      : this.itemAdded.emit(this.editForm.value);
    this.editForm.reset();
    this.editMode = false;
  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.editItemIndex);
    this.editForm.reset();
    this.editMode = false;
  }
}
