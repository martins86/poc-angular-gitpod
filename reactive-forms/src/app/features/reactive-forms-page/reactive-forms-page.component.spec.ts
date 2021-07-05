import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsPageComponent } from './reactive-forms-page.component';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsPageComponent;
  let fixture: ComponentFixture<ReactiveFormsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
