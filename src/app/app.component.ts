import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { IonToolbar, IonMenu, IonHeader, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  isShowMenu!: Observable<boolean>;

  items: Item[] = [
    {
      name: 'Início',
      icon: 'home-outline',
      path: ''
    },
    {
      name: 'Buscar barbearia',
      icon: 'cut-outline',
      path: ''
    },
    {
      name: 'Agendamentos',
      icon: 'calendar-number-outline',
      path: ''
    },
    {
      name: 'Planos',
      icon: 'arrow-up-circle-outline',
      path: ''
    },
    {
      name: 'Sair',
      icon: 'exit-outline',
      path: ''
    },
  ]

  constructor(public authService: AuthService, private router: Router, private menuController: MenuController) { }

  ngOnInit() {
    this.isShowMenu = this.authService.getAuthentication();
  }

  hideToolbar() {
    this.authService.logout();
    this.menuController.close();
    this.router.navigate(['/home/booking']);
  }
}
