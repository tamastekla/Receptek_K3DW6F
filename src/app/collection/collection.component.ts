import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  @Input() recipeCollections: string[] = [];
  @Input() collections: string[] = [];
  @Output() collectionToggled = new EventEmitter<string>();
  @Output() collectionCreated = new EventEmitter<string>();

  newCollection = '';

  toggleCollection(name: string) {
    this.collectionToggled.emit(name);
  }

  addCollection() {
    const name = this.newCollection.trim();
    if (name && !this.collections.includes(name)) {
      this.collectionCreated.emit(name);
    }
    this.newCollection='';
  }

}
