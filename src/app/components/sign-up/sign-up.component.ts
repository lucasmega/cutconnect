import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private fb: FormBuilder
  ) {
    {
      this.form = this.fb.group({
        password: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      });
     }
   }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.clearFields();
  }

  onSubmit() {
    this.markControlsAsTouched(this.form);
    this.form.valid ? this.signUp() : null;
  }

  toSignIn() {
    this.clearFields();
    this.router.navigate(['/sign-in']);
  }

  async signUp() {
    await this.authService.createUserWithEmailAndPassword(this.form.get('email')?.value, this.form.get('password')?.value).then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error)
    });
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
