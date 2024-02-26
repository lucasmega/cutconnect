import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnDestroy  {

  isShowHeader$!: Observable<boolean>;
  private subscription!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isShowHeader$ = this.authService.getAuthentication();
    this.isShowHeader$.subscribe(console.log);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
