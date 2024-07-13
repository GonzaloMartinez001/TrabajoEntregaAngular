import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepediaProductsComponent } from './gamepedia-products.component';

describe('GamepediaProductsComponent', () => {
  let component: GamepediaProductsComponent;
  let fixture: ComponentFixture<GamepediaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamepediaProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamepediaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
