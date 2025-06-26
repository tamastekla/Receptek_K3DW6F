import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-favorites-filter',
  standalone: true,  
  imports: [FormsModule, CommonModule], 
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