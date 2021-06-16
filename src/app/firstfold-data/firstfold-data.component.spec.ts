import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstfoldDataComponent } from './firstfold-data.component';

describe('FirstfoldDataComponent', () => {
  let component: FirstfoldDataComponent;
  let fixture: ComponentFixture<FirstfoldDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstfoldDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstfoldDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
