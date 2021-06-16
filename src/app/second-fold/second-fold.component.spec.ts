import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFoldComponent } from './second-fold.component';

describe('SecondFoldComponent', () => {
  let component: SecondFoldComponent;
  let fixture: ComponentFixture<SecondFoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondFoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
