import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigaatioComponent } from './navigaatio.component';

describe('NavigaatioComponent', () => {
  let component: NavigaatioComponent;
  let fixture: ComponentFixture<NavigaatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigaatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigaatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
