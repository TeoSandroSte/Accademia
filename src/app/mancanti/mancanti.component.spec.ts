import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MancantiComponent } from './mancanti.component';

describe('MancantiComponent', () => {
  let component: MancantiComponent;
  let fixture: ComponentFixture<MancantiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MancantiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MancantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
