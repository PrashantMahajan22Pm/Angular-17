import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormGroup,FormControl,ReactiveFormsModule} from '@angular/forms';




@Component({
  selector: 'app-form1-basic',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './form1-basic.component.html',
  styleUrl: './form1-basic.component.css'
})
export class Form1BasicComponent 
{
  MarvellousForm = new FormGroup(
   {
    username : new FormControl(''),
    password : new FormControl(''),
    ConfirmPass : new FormControl('') 
   }
  );
}
