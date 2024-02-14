import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  implements OnInit {

  constructor(private AuthService: AuthService) {}

  ngOnInit() {}

  async signIn() {
    await this.AuthService.loginWithEmailAndPassword("lucas.mega07@gmail.com", "!Lm426367").then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error)
    });
  }

  async register() {
    await this.AuthService.createUserWithEmailAndPassword("lucas.mega07@gmail.com", "!Lm426367").then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error)
    });
  }

}
