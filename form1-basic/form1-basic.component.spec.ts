import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1BasicComponent } from './form1-basic.component';

describe('Form1BasicComponent', () => {
  let component: Form1BasicComponent;
  let fixture: ComponentFixture<Form1BasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form1BasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Form1BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
