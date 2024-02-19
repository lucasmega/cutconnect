import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireModule } from "@angular/fire/compat";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCkvXl1FSoOLkS2A7btZpk5FR9PsUj1W6U",
      authDomain: "cutconnect-aa86b.firebaseapp.com",
      projectId: "cutconnect-aa86b",
      storageBucket: "cutconnect-aa86b.appspot.com",
      messagingSenderId: "819670557652",
      appId: "1:819670557652:web:6263d4de6825872eda6c41",
      measurementId: "G-Y6PD8CK1X9",
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
