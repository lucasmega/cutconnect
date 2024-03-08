import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  async loginWithGoogle() {
    await this.authService.loginWithGoogle().then(async (response: any) => {
      await this.authService.createSession(response);
      await this.router.navigate(['/home']);
    })
      .catch((error: any) => {
        const messsage = this.authService.handleAuthenticationFailure(error.code);
        this.showAlert('Atenção', messsage);
      });

  }

  toSignUp() {
    this.router.navigate(['/sign-up']);
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
