import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    SignUpComponent, 
    SignInComponent,
    HomeComponent,
    TabBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCkvXl1FSoOLkS2A7btZpk5FR9PsUj1W6U",
      authDomain: "cutconnect-aa86b.firebaseapp.com",
      projectId: "cutconnect-aa86b",
      storageBucket: "cutconnect-aa86b.appspot.com",
      messagingSenderId: "819670557652",
      appId: "1:819670557652:web:6263d4de6825872eda6c41",
      measurementId: "G-Y6PD8CK1X9",
    }),
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
