import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  openWhatsAppmessage1() {
    window.open('https://wa.me/919284888322', '_blank');
  }

  openWhatsAppmessage2() {
    window.open('https://wa.me/918718019004', '_blank');
  }

  openWhatsAppmessage3() {
    window.open('https://wa.me/918600033893', '_blank');
  }

  initiateCall() {
    window.open('tel:+918669842683');
  }

}
