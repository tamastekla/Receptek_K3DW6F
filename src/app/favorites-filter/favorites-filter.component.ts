import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorites-filter',
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