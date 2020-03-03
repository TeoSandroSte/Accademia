import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuleComponent } from './aule.component';

describe('AuleComponent', () => {
  let component: AuleComponent;
  let fixture: ComponentFixture<AuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
