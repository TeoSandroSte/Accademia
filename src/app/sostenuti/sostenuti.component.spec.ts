import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SostenutiComponent } from './sostenuti.component';

describe('SostenutiComponent', () => {
  let component: SostenutiComponent;
  let fixture: ComponentFixture<SostenutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SostenutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SostenutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
