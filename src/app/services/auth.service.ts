import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'; 


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
}
