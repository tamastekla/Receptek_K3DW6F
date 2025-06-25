import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FavoritesFilterComponent } from './favorites-filter/favorites-filter.component';
import { NewRecipeFormComponent } from './new-recipe-form/new-recipe-form.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CollectionFilterComponent } from './collection-filter/collection-filter.component'; //fsc
import { CollectionComponent } from './collection/collection.component';


interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string;
  favorite: boolean;
  collections: string[]; //for collections:= fc
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
    CollectionFilterComponent,
    CollectionComponent //fsc
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = [];
  showFavoritesOnly = false;
  collections:string[] =['Leves','Főétel','Desszert']; //fc
  selectedCollection: string | null = null; //fsc

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
    recipe.collections = []; //fc
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

  toggleCollection(id: number, collection: string) { //fc
    const recipe = this.recipes.find(r => r.id === id);
  if (!recipe) return;

  const index = recipe.collections.indexOf(collection);
  if (index === -1) {
    recipe.collections.push(collection);
  } else {
    recipe.collections.splice(index, 1);
  }
  this.saveToLocalStorage();
}

createCollection(name: string) {
  const trimmed = name.trim();

  // Avoid empty or duplicate (case-insensitive) entries
  const alreadyExists = this.collections.some(
    c => c.toLowerCase() === trimmed.toLowerCase()
  );

  if (trimmed && !alreadyExists) {
    this.collections.push(trimmed);
  } else {
    alert('Már létezik ilyen nevű gyűjtemény!'); // Optional: show message
  }
}

setSelectedCollection(name: string | null){ //fsc
  console.log('Selected collection:', name); //fsc
  this.selectedCollection = name;
}

}