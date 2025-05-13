import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesFilterComponent } from './favorites-filter.component';

describe('FavoritesFilterComponent', () => {
  let component: FavoritesFilterComponent;
  let fixture: ComponentFixture<FavoritesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
