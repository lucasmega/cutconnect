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
import { SearchComponent } from '../components/search/search.component';
import { SignatureComponent } from '../components/signature/signature.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';

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
  },
  {
    canActivate: [AuthGuard],
    path: 'search',
    component: SearchComponent
  },
  {
    canActivate: [AuthGuard],
    path: 'signature',
    component: SignatureComponent
  }
]

@NgModule({
  declarations: [
    ModalComponent,
    BranchComponent,
    BookingComponent,
    ProductComponent,
    ProfessionalComponent,
    SearchComponent,
    ScheduleComponent
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
