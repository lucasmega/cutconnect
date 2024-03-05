import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../auth.guard';

import { HomeComponent } from '../components/home/home.component';
import { ModalComponent } from '../components/modal/modal.component';
import { BranchComponent } from '../components/branch/branch.component';
import { ProductComponent } from '../components/product/product.component';
import { BookingComponent } from '../components/booking/booking.component';
import { ProfessionalComponent } from '../components/professional/professional.component';

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
    ModalComponent,
    BranchComponent,
    BookingComponent,
    ProductComponent,
    ProfessionalComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    BranchComponent,
    ProductComponent,
    ProfessionalComponent
  ]
})
export class PageModule { }
