import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FavoritesFilterComponent } from './favorites-filter/favorites-filter.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { NewRecipeFormComponent } from './new-recipe-form/new-recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    FavoritesFilterComponent,
    IngredientsListComponent,
    NewRecipeFormComponent
  ],
  imports: [BrowserModule, FormsModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}