import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { SortableModule } from 'ngx-bootstrap/sortable';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Include FormsModule for template-driven forms
    ReactiveFormsModule, // Include ReactiveFormsModule for reactive forms
    [SortableModule.forRoot()]
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
