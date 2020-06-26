import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuporarioComponent } from './popuporario.component';

describe('PopuporarioComponent', () => {
  let component: PopuporarioComponent;
  let fixture: ComponentFixture<PopuporarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopuporarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopuporarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
