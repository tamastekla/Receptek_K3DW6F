import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection-filter',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './collection-filter.component.html',
  styleUrl: './collection-filter.component.css'
})
export class CollectionFilterComponent {
  @Input() collections: string[] = [];
  @Input() selectedCollection: string | null = null;
  @Output() select = new EventEmitter<string | null>();

}
