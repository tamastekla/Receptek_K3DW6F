import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  imports : [FormsModule]
})
export class NewRecipeFormComponent {
  @Output() recipeAdded = new EventEmitter<any>();
  title = '';
  ingredients = '';
  steps = '';

  add() {
    if (!this.title || !this.ingredients || !this.steps) return;
    const recipe = {
      title: this.title,
      ingredients: this.ingredients.split(',').map(i => i.trim()),
      steps: this.steps,
      favorite: false,
      id: 0
    };
    this.recipeAdded.emit(recipe);
    this.title = '';
    this.ingredients = '';
    this.steps = '';
  }
}
