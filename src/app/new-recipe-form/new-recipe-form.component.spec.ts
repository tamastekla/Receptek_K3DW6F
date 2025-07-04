import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeFormComponent } from './new-recipe-form.component';

describe('NewRecipeFormComponent', () => {
  let component: NewRecipeFormComponent;
  let fixture: ComponentFixture<NewRecipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRecipeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
