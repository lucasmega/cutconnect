import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {


  services = [
    {
      img: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "The Wisconsin State Capitol building in Madison, WI at night",
      time: "30h",
      price: 10.67,
      serviceName: "Corte de cabelo",
    },
    {
      img: "https://images.pexels.com/photos/10065598/pexels-photo-10065598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "The Wisconsin State Capitol building in Madison, WI at night",
      time: "30h",
      price: 10.30,
      serviceName: "Pacote",
    },
    {
      img: "https://images.unsplash.com/photo-1604355240616-5e907f42b431?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "The Wisconsin State Capitol building in Madison, WI at night",
      time: "30h",
      price: 60.25,
      serviceName: "Corte navalhado",
    },
    {
      img: "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "The Wisconsin State Capitol building in Madison, WI at night",
      time: "30h",
      price: 10.18,
      serviceName: "Barba",
    }
  ];

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

  constructor(private router: Router) {
    
   }

  ngOnInit() {}

  toBooking() { this.router.navigate(['/home/booking']); }



}
