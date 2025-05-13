import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredients-list',
  imports : [CommonModule],
  template: '<ul><li *ngFor="let ingredient of ingredients">{{ ingredient }}</li></ul>'
})
export class IngredientsListComponent {
  @Input() ingredients: string[] = [];
}
