import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEquiposComponent } from './stock-equipos.component';

describe('StockEquiposComponent', () => {
  let component: StockEquiposComponent;
  let fixture: ComponentFixture<StockEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
