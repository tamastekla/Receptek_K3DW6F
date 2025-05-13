import { Component, Input, Output, EventEmitter ,ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  imports : [CommonModule,ElementRef]
})
export class RecipeCardComponent {
  @Input() recipe!: any;
  @Output() toggleFavorite = new EventEmitter<void>();
}

