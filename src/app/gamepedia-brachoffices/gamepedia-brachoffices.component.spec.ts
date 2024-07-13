import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepediaBrachofficesComponent } from './gamepedia-brachoffices.component';

describe('GamepediaBrachofficesComponent', () => {
  let component: GamepediaBrachofficesComponent;
  let fixture: ComponentFixture<GamepediaBrachofficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamepediaBrachofficesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamepediaBrachofficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
