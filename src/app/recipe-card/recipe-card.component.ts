import { Component, Input, Output, EventEmitter } from '@angular/core'; //,ElementRef
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component';
 //fc

@Component({
  selector: 'app-recipe-card',
  standalone: true, //ezis
  templateUrl: './recipe-card.component.html',
  imports : [CommonModule, IngredientsListComponent] // ElementRef, collection->cf
})
export class RecipeCardComponent {
  @Input() recipe!: any;
  @Input() collections:string[] =[];
  @Input() recipeCollections: string[] = [];

  @Output() toggleFavorite = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() collectionToggled = new EventEmitter<string>(); //cf
  
}

