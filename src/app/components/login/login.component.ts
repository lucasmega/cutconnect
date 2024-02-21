import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        password: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      });
     }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.clearFields();
  }

  async signIn() {
    await this.authService.loginWithEmailAndPassword(this.form.get('email')?.value, this.form.get('password')?.value).then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      const messsage = this.authService.handleAuthenticationFailure(error.code);
      alert(messsage);
    });
  }

  toSignIn() {
    this.clearFields();
    this.router.navigate(['/sign-in']);
  }

  onSubmit() {
    this.markControlsAsTouched(this.form);
    this.form.valid ? this.signIn() : null;
  }

  private markControlsAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(fieldName => {
      const control = formGroup.get(fieldName);
  
      if (control instanceof FormGroup) {
        this.markControlsAsTouched(control as FormGroup);
      } else {
        control?.markAsTouched();
      }
    });
  }

  private clearFields() {
    this.form.reset();
  }

}
