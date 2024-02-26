import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { BookingComponent } from '../components/booking/booking.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '',
    component: HomeComponent
  },
  {
    canActivate: [AuthGuard],
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
    IonicModule.forRoot(), 
    RouterModule.forChild(routes)
  ]
})
export class PageModule { }
