import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfillingComponent } from './formfilling.component';

describe('FormfillingComponent', () => {
  let component: FormfillingComponent;
  let fixture: ComponentFixture<FormfillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfillingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormfillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
