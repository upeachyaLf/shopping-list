import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  isEditMode: boolean = false;

  recipeForm: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let currentId = params['id'];
      this.isEditMode = currentId ? true : false;
    });

    this.recipeForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, [Validators.required]),
      ingredents: new FormArray([]),
    });
  }

  onSubmit() {
    console.log('submitted', this.recipeForm);
    // this.recipeForm.reset();
  }

  addIngredent() {
    const control = new FormGroup({
      name: new FormControl(),
      amount: new FormControl(),
    });
    (<FormArray>this.recipeForm.get('ingredents')).push(control);
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredents')).controls;
  }
}
