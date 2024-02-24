import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { BookingComponent } from '../components/booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  }
]

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageModuleModule { }
