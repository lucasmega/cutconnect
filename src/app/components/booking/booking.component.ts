import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent  implements OnInit {

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {}

  toHome() {
    this.router.navigate(['/home']);
  }

  async openModal(component: String) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      breakpoints: [0, 0.25, 0.5, 0.75],
      initialBreakpoint: 0.25,
      presentingElement: await this.modalController.getTop(),
      componentProps: {
        component: component
      }
    });

    await modal.present();
  }

}
