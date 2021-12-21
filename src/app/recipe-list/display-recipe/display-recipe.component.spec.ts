import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecipeComponent } from './display-recipe.component';

describe('DisplayRecipeComponent', () => {
  let component: DisplayRecipeComponent;
  let fixture: ComponentFixture<DisplayRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
