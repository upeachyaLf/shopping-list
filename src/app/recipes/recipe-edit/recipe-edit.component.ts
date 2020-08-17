import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { RecipeService } from '../../services/recipe.service';
import { Ingredent } from 'src/app/common/models/ingredent.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  isEditMode: boolean = false;
  currentId: number;
  recipeForm: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentId = params['id'];
      this.isEditMode = this.currentId ? true : false;
    });

    this.initializeForm();
  }

  onSubmit() {
    console.log('submitted', this.recipeForm);
  }

  initializeForm() {
    let recipeName = null;
    let recipeDescription = null;
    let recipeId = null;
    let recipeImagePath = null;
    let recipeIngredents = new FormArray([]);

    if (this.isEditMode) {
      const initialFormData = this.recipeService.findFromId(this.currentId);
      if (initialFormData.ingredents) {
        initialFormData.ingredents.map((ingredent) => {
          recipeIngredents.push(
            new FormGroup({
              name: new FormControl(ingredent.name, Validators.required),
              amount: new FormControl(ingredent.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        });
        recipeName = initialFormData.name;
        recipeDescription = initialFormData.description;
        recipeId = initialFormData.id;
        recipeImagePath = initialFormData.imagePath;
      }
    }
    this.recipeForm = new FormGroup({
      id: new FormControl(recipeId, Validators.required),
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, [Validators.required]),
      ingredents: recipeIngredents,
    });
  }

  addIngredent() {
    const control = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
    });
    (<FormArray>this.recipeForm.get('ingredents')).push(control);
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredents')).controls;
  }
}
