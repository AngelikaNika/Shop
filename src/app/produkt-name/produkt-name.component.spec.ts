import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktNameComponent } from './produkt-name.component';

describe('ProduktNameComponent', () => {
  let component: ProduktNameComponent;
  let fixture: ComponentFixture<ProduktNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
