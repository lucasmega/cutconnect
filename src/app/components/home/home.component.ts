import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../../services/home.service';
import { UserService } from 'src/app/services/user.service';
import { ProductWithPrice } from 'src/app/models/product-with-price';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  public products: ProductWithPrice[] = [];

  bookings = [
    {
      id: 0,
      date: "31 de Janeiro 2024",
      hour: "11h",
      professional: "Alex",
      branch: "Rua Carlos Magalhães, 35"
    },
    {
      id: 1,
      date: "15 de Março 2024",
      hour: "11h",
      professional: "Alex",
      branch: "Rua Carlos Magalhães, 35"
    }
  ]

  constructor(private router: Router, private homeService: HomeService, private userService: UserService) {

    this.userService.registerUser().subscribe(() => {
      this.homeService.findProductsByEmail().subscribe((response: ProductWithPrice[]) => this.products = response);
    })
   }

  ngOnInit() {}

  toBooking() { this.router.navigate(['/home/booking']); }



}
