import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

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

  constructor(public authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.isAuthenticated());
  }
}
