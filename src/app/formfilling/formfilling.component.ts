import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formfilling',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formfilling.component.html',
  styleUrl: './formfilling.component.css'
})
export class FormfillingComponent 
{
  name = new FormControl('');
}
