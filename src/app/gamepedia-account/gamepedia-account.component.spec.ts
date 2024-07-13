import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepediaaccountComponent } from './gamepedia-account.component';

describe('GamepediaaccountComponent', () => {
  let component: GamepediaaccountComponent;
  let fixture: ComponentFixture<GamepediaaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamepediaaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamepediaaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
