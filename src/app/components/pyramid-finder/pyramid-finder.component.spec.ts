import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidFinderComponent } from './pyramid-finder.component';

describe('PyramidFinderComponent', () => {
  let component: PyramidFinderComponent;
  let fixture: ComponentFixture<PyramidFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
