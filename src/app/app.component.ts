import { Component, OnInit } from '@angular/core';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string;
  favorite: boolean;
}

@Component({
  selector: 'app-root',
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
}