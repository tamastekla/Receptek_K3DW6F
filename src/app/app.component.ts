import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FavoritesFilterComponent } from './favorites-filter/favorites-filter.component';
import { NewRecipeFormComponent } from './new-recipe-form/new-recipe-form.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';



interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string;
  favorite: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FavoritesFilterComponent,
    NewRecipeFormComponent,
    RecipeCardComponent,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = [];
  showFavoritesOnly = false;

  ngOnInit() {
    const stored = localStorage.getItem('recipes');
    if (stored) {
      this.recipes = JSON.parse(stored);
    }
  }

  addRecipe(recipe: Recipe) {
    recipe.id = Date.now();
    this.recipes.push(recipe);
    this.saveToLocalStorage();
  }

  toggleFavorite(id: number) {
    const recipe = this.recipes.find(r => r.id === id);
    if (recipe) {
      recipe.favorite = !recipe.favorite;
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.saveToLocalStorage();
  }
}