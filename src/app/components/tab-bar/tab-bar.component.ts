import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent  implements OnInit {


  isShowMenu!: Observable<boolean>;

  constructor(
    private router: Router, 
    public authService: AuthService, 
    private menuController: MenuController
  ) { }

  ngOnInit() {
    this.isShowMenu = this.authService.getAuthentication();
  }

  navigateByPath(path: string) {

    if (path === 'sign-in') {
      this.authService.setAuthentication(false);
    }

    this.menuController.close();
    path != '' ? this.router.navigate([path]) : null;
  }

}
