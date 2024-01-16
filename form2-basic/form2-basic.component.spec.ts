import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2BasicComponent } from './form2-basic.component';

describe('Form2BasicComponent', () => {
  let component: Form2BasicComponent;
  let fixture: ComponentFixture<Form2BasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form2BasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Form2BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
