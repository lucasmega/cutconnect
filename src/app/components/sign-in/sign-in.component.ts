import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  implements OnInit {

  constructor(private authService: AuthService, private router: Router ) {
  }

  ngOnInit() {}

  toLogin() {
    this.router.navigate(['/login']);
  }

  async signIn() {
    await this.authService.loginWithEmailAndPassword("lucas.mega07@gmail.com", "!Lm426367").then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error)
    });
  }

  async loginWithGoogle() {
    this.authService.loginWithGoogle().then((response: any) => {
      console.log(response)
    })
    .catch((error: any) => {
      console.error(error);
    })
  }

  async getAccessToken() {
    this.authService.getAccessToken().then((response: any) => {})
  }

}
