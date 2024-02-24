import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  toHome() {
    this.router.navigate(['/home']);
  }

}
