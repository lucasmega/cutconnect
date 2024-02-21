import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'; 


export enum AuthErrorCode {
  InvalidCredential = 'auth/invalid-credential',
  EmailAlreadyExists = 'auth/email-already-exists',
  IdTokenExpired = 'auth/id-token-expired',
  TooManyRequests = 'auth/too-many-requests',
  EmailAlreadyInUse = 'auth/email-already-in-use'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  get currentUser() {
    return this.afAuth.authState;
  }

  logout() {
    return this.afAuth.signOut();
  }

  loginWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async getAccessToken(): Promise<any> {
    const user: any = await this.afAuth.currentUser;
    if(user ) {
      console.log(await user.getIdTokenResult());
    }
  }

  isAuthenticated(): boolean {
    return true;
  }

  handleAuthenticationFailure(errorCode: string): string {
    switch (errorCode) {
      case AuthErrorCode.InvalidCredential:
        return 'Usuário ou senha inválidos.';
      case AuthErrorCode.EmailAlreadyExists:
        return 'O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.';
      case AuthErrorCode.IdTokenExpired:
        return 'O token de código do Firebase provisionado expirou.';
      case AuthErrorCode.TooManyRequests:
        return 'O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login mal sucedidas. Você pode restaurá-lo imediatamente redefinindo sua senha ou tentar novamente mais tarde.';
      case AuthErrorCode.EmailAlreadyInUse:
        return 'O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.';
      default:
        return 'Sistema indisponível';
    }
  }
}
