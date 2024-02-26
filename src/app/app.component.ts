import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { IonToolbar, IonMenu, IonHeader, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

export interface Item {
  name: string,
  icon: string,
  path: string
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router, 
    public authService: AuthService, 
    private menuController: MenuController
    ) {

   }

  ngOnInit() {
    
  }

  navigateByPath(path: string) {

    if (path === 'sign-in') {
      this.authService.setAuthentication(false);
    }

    this.menuController.close();
    path != '' ? this.router.navigate([path]) : null;
  }
}
