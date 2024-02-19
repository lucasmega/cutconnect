import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  async signIn() {
    await this.authService.loginWithEmailAndPassword("lucas.mega07@gmail.com", "!Lm426367").then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error)
    });
  }

  toSignIn() {
    this.router.navigate(['/sign-in'])
  }

}
