import { Component, Input, Output, EventEmitter } from '@angular/core'; //,ElementRef
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true, //ezis
  templateUrl: './recipe-card.component.html',
  imports : [CommonModule, IngredientsListComponent] // ElementRef
})
export class RecipeCardComponent {
  @Input() recipe!: any;
  @Output() toggleFavorite = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}

