import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; //ezek
import { CommonModule } from '@angular/common'; //ezek

@Component({
  selector: 'app-favorites-filter',
  standalone: true, // ez 
  imports: [FormsModule, CommonModule], //ez 
  template: `
    <label>
      <input type="checkbox" [(ngModel)]="showFavoritesOnly" (change)="showFavoritesOnlyChange.emit(showFavoritesOnly)" />
      Csak kedvencek
    </label>
  `
})
export class FavoritesFilterComponent {
  @Input() showFavoritesOnly = false;
  @Output() showFavoritesOnlyChange = new EventEmitter<boolean>();
}