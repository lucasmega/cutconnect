import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IonTabBar } from '@ionic/angular'

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {

  isShowMenu!: Observable<boolean>;

  constructor(
    private router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.isShowMenu = this.authService.isAuthenticated$;
    }

  navigate() {
    this.authService.setAuthentication(false);
    this.authService.getAuthentication().subscribe(() =>  this.router.navigate(['/sign-in']));
  }

}
