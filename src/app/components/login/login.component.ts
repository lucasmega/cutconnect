import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  async signIn() {
    await this.authService.loginWithEmailAndPassword("lucas.mega07@gmail.com", "!Lm426367").then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error)
    });
  }

}
